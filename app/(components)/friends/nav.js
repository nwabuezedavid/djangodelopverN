"use client"
import { Card, CardContent } from "../ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../ui/carousel"


import {useState} from 'react'  
export const NavTopic = () => {

      
      
    const [items,setitem] = useState( [
        "Singing & Dancing",
        "Comedy",
        "Sports",
        "Anime & Comics",
        "Relationship",
        "Shows",
        "Lipsync",
        "Daily Life",
        "Beauty Care",
        "Games",
        "Society",
        "Outfit",
        "Cars",
        "Food",
        "Animals",
        "Family",
        "Drama",
        "Fitness & Health",
        "Education",
        "Technology"
      ])
  return (
    <div className=" w-full">
 <Carousel className="w-full ">
      <CarouselContent className="-ml-1 w-full h-full">
        {items.map((e, index) => (
          <CarouselItem key={index} className="pl-1 ">
            <div className="w-fit h-fit">
              <Card className=" w-fit h-fit flex items-center">
                <CardContent className="rounded-none text-[70%] p-0 p-2 border-none  text-gray-0 shadow-none  w-fit h-[40px] flex   flex-row items-center justify-center  ">
        <b className ="">
        {e}
       </b>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </div>
  )
}



