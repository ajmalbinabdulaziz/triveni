'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbSpeedboat, TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiCargoShip,
  GiBarn, 
  GiMoneyStack, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsTaxiFrontFill, BsFillEnvelopeFill, BsSnow } from 'react-icons/bs';
import { RiSailboatFill } from 'react-icons/ri';
import { MdOutlineVilla, MdFoodBank, MdHouseboat } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import PageCategoryBox from '../PageCategoryBox';


export const categories = [

  {
    label: 'Shikara boat',
    icon: RiSailboatFill,
    description: 'This property is has windmills!',
  },
  {
    label: 'Houseboat',
    icon: MdHouseboat,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Premium Houseboat',
    icon: GiCargoShip,
    description: 'This property is near a lake!'
  },
  {
    label: 'Pricing',
    icon: GiMoneyStack,
    description: 'This property is an ancient castle!'
  },
]

const pageCategories = [
   {
    label: 'Food Menu',
    icon: MdFoodBank,
    description: 'This property offers camping activities!'
  },
  {
    label: 'Contact',
    icon: BsFillEnvelopeFill,
    description: 'This property is brand new and luxurious!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  // const pathname = usePathname();
  // const isMainPage = pathname === '/';

  // if (!isMainPage) {
  //   return null;
  // }

  return (
    <Container>
      <div
        className="
          pt-3
          grid
          grid-cols-3
          gap-3
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        <div className='col-span-2 flex flex-row justify-around'>
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
        </div>
        <div className='flex flex-row justify-around'>
          {pageCategories.map((item) => (
            <PageCategoryBox 
              key={item.label}
              label={item.label}
              icon={item.icon}
              // selected={category === item.label}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
 
export default Categories;