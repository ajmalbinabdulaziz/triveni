'use client';

import { Range } from "react-date-range";
// import Button from "../Button";
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


interface ListingReservationProps {
  price: number;
  dateRange: Range,
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
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
  disabledDates
}) => {

  const [cruiseMode, setCruiseMode] = useState("Day")
  const [acMode, setAcMode] = useState("Ac")

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
              <p>Cruise Mode </p>
            </div>

            <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{cruiseMode}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuCheckboxItem
                  onClick={()=>{setCruiseMode("Night")}}
                  checked={cruiseMode === "Night"}
                >
                  Night
                </DropdownMenuCheckboxItem>
            
                <DropdownMenuCheckboxItem
                  checked={cruiseMode === "Day"}
                  onClick={()=>{setCruiseMode("Day")}}
                >
                  Day
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          </div>

          <div className="flex p-4">
            <div className="py-2 pr-2">
              Ac/Non Ac
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">{acMode}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuCheckboxItem
                    onClick={()=>{setAcMode("NonAc")}}
                    checked={acMode === "NonAc"}
                  >
                    Non Ac
                  </DropdownMenuCheckboxItem>
              
                  <DropdownMenuCheckboxItem
                    checked={acMode === "Ac"}
                    onClick={()=>{setAcMode("Ac")}}
                  >
                    Ac
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          
          </div>
        </div>
      <div className="
      flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
          $ {price}
        </div>
        <div className="font-light text-neutral-600">
          night
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
        <Button 
          disabled={disabled} 
          label="Reserve" 
          onClick={onSubmit}
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