import Image from "next/image"


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
      <div className="mt-20">
    {food_menu.map((menu) => (
      <div>

        <h1>{menu.item}</h1>
        <Image 
          src={menu.image}
          width={200}
            height={200} alt="" />
        
        </div>
      ))}
    </div>
        
  )
}

export default FoodMenuPage