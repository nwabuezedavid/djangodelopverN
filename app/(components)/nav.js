


"use client"


import Link from "next/link";
import { Input } from './ui/input';
import { Button } from '@/app/(components)/ui/button';
import { useNavto2 } from "@/context/cnav";
import { useContext, useEffect, useState } from 'react';
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { contextxall } from "./context/navs";




import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/(components)/ui/hover-card"
import { CalendarIcon, PersonStanding, ToggleRight } from "lucide-react";
import Login from './login';
import { useRouter } from "next/navigation";
import Image from "next/image";
const Navx = () => {
const [locationx,seclocation] = useState()
const [search,setsearch] = useState()
const linkc = useRouter()
useEffect(()=>{
  if (typeof window !== 'undefined') {
    seclocation(window.location.href);
  }
},[])
  const seas = (e)=>{
    e.preventDefault()
    if(new URL(locationx).pathname == '/explore'){
      linkc.push(`/explore?find=${search}`)

    }
  }
  const {tog, settog} = useNavto2();
  const {islogin, setlog} = useContext(contextxall)
  return (
    <div className="flex flex-row w-[90%]  max-md:w-full   p-2 border-b-2  items-center justify-between h-fit ">
        <div onClick={()=> linkc.push('/')} className=" flex  w-[80px] shrink-0 items-center flex flex-row max-sm:h-[40px] max-sm:w-[40px] h-[40px]   bg-black">
          <Image width={0} height={0}  alt="asdas" src="/logo.png" className="w-full  h-full"  />
        </div>
        <b className="bi bi-text-center cursor-pointer md:hidden text-[260%]" onClick={()=> settog( (e)=> e ? false :true)}></b>
        <form  className="w-1/2  max-md:w-[40%] p-4 " onSubmit={seas}   >

           <Input className="w-full  max-md:w-full " name='find' onChange={(e)=>setsearch(e.target.value)} placeholder="search here"   />
        </form>
          {islogin ?
          <span className="flex items-center">
        <Button  onClick={()=> linkc.push('/uploading')}  className="bg-red-50 items-center flex max-md:w-[40px] rounded text-red-950 hover:bg-black space-x-[6px] hover:text-white border p-2 px-4 capitalize  hover:text-white" size="lg"  ><i className="bi bi-download "></i> <b className="max-md:hidden hover:text-white text-blue-950">upload</b> </Button>
       
       <Link href="/">
        <i className="bi bi-envelope-fill hover:bg-black hover:text-white w-3 h-[80%]  w-3 h-full mx-2 p-3 flex items-center justify-center border "></i>
       </Link>
       <HoverCardDemo>

       </HoverCardDemo>
       
          </span> :
          <AlertDialogTrigger className="w-fit h-fit p-2 m-auto  border-2 mx-2 text-[red] rounded
          bg-white hover:bg-gray-100 hover:text-red-500  border-red-500">Login</AlertDialogTrigger>
         
          }
    </div>
  )
}

export default Navx



export function HoverCardDemo({childern}) {
  const {Logout} = useContext(contextxall)
  let data = sessionStorage.getItem('userData')
  let mainuser = JSON.parse(data)
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
        {childern}
        <Image width={0} height={0}  alt="asdas" src="/logo.png" className="hover:bg-black hover:text-white  w-[43px] rounded-full h-[40px] flex h-full mx-2  flex items-center justify-center border "/>

        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Image width={100} height={0}  alt="asdas" src="/logo.png" className="w-9 h-9 rounded-full"/>
          <div className="space-y-1 flex flex-col grow">
            <h4 className="text-sm font-semibold">{mainuser.username}</h4>
            <Link href="/profile" > Profile</Link>
            <div className="flex items-center pt-2">
             <Link href='#' onClick={()=>Logout()}  className="flex w-full w-full" asChild>
             <ToggleRight/>
             <b>LOGOUT</b>
             </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
