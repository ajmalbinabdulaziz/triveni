'use client';

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { Range } from "react-date-range";
import { useRouter } from "next/navigation";
import { differenceInDays, eachDayOfInterval } from 'date-fns';

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navbar/Categories";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import ListingReservation from "@/app/components/listings/ListingReservation";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;

}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate)
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const category = useMemo(() => {
     return categories.find((items) => 
      items.label === listing.category);
  }, [listing.category]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [nightCruise, setNightCruise] = useState("No")
  const [airConditioning, setAirConditioning] = useState("No")

  console.log(`nightCruise >> ${nightCruise}`)
  console.log(`airCondition >> ${airConditioning}`)
  console.log(`total price >> ${totalPrice}`)

  const onCreateReservation = useCallback(() => {
      if (!currentUser) {
        return loginModal.onOpen();
      }
      setIsLoading(true);

      axios.post('/api/reservations', {
        nightCruise,
        airConditioning,
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing?.id
      })
      .then(() => {
        toast.success('Listing reserved!');
        setDateRange(initialDateRange);
        router.push('/trips');
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      })
  },
  [
    totalPrice, 
    nightCruise,
    airConditioning,
    dateRange, 
    listing?.id,
    router,
    currentUser,
    loginModal
  ]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = 1 + differenceInDays(
        dateRange.endDate, 
        dateRange.startDate
      );  
      
      if (nightCruise === "Yes" && airConditioning == "Yes"  && dayCount && listing.price) {
          setTotalPrice(dayCount * (20 + 10 + listing.price));
      } else if(nightCruise === "Yes" && airConditioning == "No" && dayCount && listing.price){
          setTotalPrice(dayCount * (20 + listing.price));
      } else if(nightCruise === "No" && airConditioning == "Yes" && dayCount && listing.price){
          setTotalPrice(dayCount * (10 + listing.price));
      } else if(nightCruise === "No" && airConditioning == "No" && dayCount && listing.price){
        setTotalPrice(dayCount * listing.price);
      }              
      else {
        setTotalPrice(listing.price)
      }
                
    }
  }, [dateRange, nightCruise, airConditioning, listing.price]);


  return ( 
    <Container>
      <div 
        className="
          max-w-screen-lg 
          mx-auto mt-24 whitespace-nowrap overflow-auto scrollbar-hide
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
            <div 
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
              <ListingReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
                airConditioning={airConditioning}
                setAirConditioning={(value) => setAirConditioning(value)}
                nightCruise={nightCruise}
                setNightCruise={(value) =>setNightCruise(value)}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
   );
}
 
export default ListingClient;
