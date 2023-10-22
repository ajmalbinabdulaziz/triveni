'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";
import qs from 'query-string';
import { useCallback } from "react";
import { stringify } from "querystring";


interface PageCategoryBoxProps {
    icon: IconType,
    label: string;
    selected?: boolean;
  }

const PageCategoryBox: React.FC<PageCategoryBoxProps> = ({ icon: Icon, label, selected }) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        const url = label.toLowerCase().split(" ").join("")
        router.push(`/${url}`)
      }, [label]);

    return (
        <div
        onClick={handleClick}
        className={`
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}
        `}
        >
            <Icon size={26} />
            <div className="font-medium text-xs md:text-sm">
                {label}
            </div>
        </div>
  )
}

export default PageCategoryBox