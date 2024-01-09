'use client';

import { Range } from "react-date-range";
import ButtonIcon from "../ButtonIcon";
import Calendar from "../inputs/Calendar";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { TbRuler } from "react-icons/tb";
import { useRouter } from "next/navigation";


interface ListingReservationProps {
  price: number
  dateRange: Range
  totalPrice: number
  onChangeDate: (value: Range) => void
  onSubmit: () => void
  disabled?: boolean
  disabledDates: Date[]
  airConditioning: string
  setAirConditioning: (value: Range) => void
  nightCruise: string
  setNightCruise: (value: Range) => void
}

type Checked = DropdownMenuCheckboxItemProps["checked"]

const ListingReservation: React.FC<
  ListingReservationProps
> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
  airConditioning,
  setAirConditioning,
  nightCruise,
  setNightCruise
}) => {

  const router = useRouter()

  return ( 
    <div 
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
        <div className="flex justify-between">

          <div className="flex  p-2">
            <div className="py-2 pr-2">
              <p>Night Cruise</p>
            </div>

            <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{nightCruise}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuCheckboxItem
                  onClick={()=> setNightCruise("Yes")}
                  checked={nightCruise ==="Yes"}
                >
                  Yes
                </DropdownMenuCheckboxItem>
            
                <DropdownMenuCheckboxItem
                  checked={nightCruise === "No"}
                  onClick={()=>setNightCruise("No")}
                >
                  No
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          </div>

          <div className="flex p-4">
            <div className="py-2 pr-2">
              Air Conditioning
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">{airConditioning}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuCheckboxItem
                    onClick={()=>setAirConditioning("Yes")}
                    checked={airConditioning === "Yes"}
                  >
                    Yes
                  </DropdownMenuCheckboxItem>
              
                  <DropdownMenuCheckboxItem
                    checked={airConditioning === "No"}
                    onClick={()=>setAirConditioning("No")}
                  >
                    No
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          
          </div>
        </div>
      <div className="
      flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
          $ {totalPrice}
        </div>
        <div className="font-light text-neutral-600">
          {nightCruise ? "Night Cruise" : "Day Only"}
        </div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => 
          onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <ButtonIcon 
          disabled={disabled} 
          label="Proceed to Payment" 
          // onClick={onSubmit}
          onClick={()=>router.push('/payment')}
        />
      </div>
      <hr />
      <div 
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
        <div>
          Total
        </div>
        <div>
          $ {totalPrice}
        </div>
      </div>
    </div>
   );
}
 
export default ListingReservation;