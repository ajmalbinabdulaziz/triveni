import Image from "next/image"
import Container from "../components/Container"


const food_menu = [
  {
    item: 'idli',
    image: '/images/foodmenu/rice.webp',
  },
  {
    item: 'puttu',
    image: '/images/foodmenu/rice.webp',
  },
  {
    item: 'sadya',
    image: '/images/foodmenu/rice.webp',
  },
  {
    item: 'biriyani',
    image: '/images/foodmenu/rice.webp',
  },
]

const FoodMenuPage = () => {
  return (
    <Container>

    <div className="mt-32 flex p-4 space-x-10 justify-around">
      {food_menu.map((menu) => (
        <div className="">

          <div className="relative h-40 w-52 ">
            <Image 
              className="rounded hover:scale-105 cursor-pointer transition-transform"
              src={menu.image}
              // width={200}
              // height={100} 
              fill
              alt="" />
          </div>

        <h1 className="p-2 text-center font-bold">{menu.item}</h1>

        </div>
      ))}
    </div>
      </Container>
        
  )
}

export default FoodMenuPage