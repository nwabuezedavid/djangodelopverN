"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { useContext } from "react"
import { togle, useNavto2 } from "@/context/cnav"
import { AlertDialogTrigger } from "./ui/alert-dialog"
import { contextxall } from "./context/navs"

const Barleft = () => {
    const {tog, settog} = useNavto2();
  const {islogin, setlog} = useContext(contextxall)

  
  return (
    <aside className={`w-[20%] md:sticky md:h-screen top-0 z-50 max-md:fixed top-0  max-sm:w-[90%] max-md:translate-x-[-100vw]  max-md:w-1/2 max-md:grow max-md:mt-[75px] delay-100 bg-white ${tog && 'max-md:translate-x-[-100vw]'}`}>

    <div className={`w-[100%] h-full flex flex-col overflow-y-auto transition delay-75 max-md:translate-x-[-100vw] ${tog && 'max-md:translate-x-[-100vw]'} `}>
<div className=" w-full h-fit capitalize  items-center flex-col py-3 flex py-4">

    <Link className="w-full"   href="/foryou">
    <div  className="flex space-x-1 w-full p-2 border-b-2 w-full hover:text-[red] items-center flex flex-row " >

    <i className='bi bi-house text-3xl font-semibold before:'></i>
    <b>For You</b>
    </div>
    </Link>
    <Link className="w-full"   href="/friends">
    <div  className="flex space-x-1 w-full p-2 border-b-2 w-full hover:text-[red] items-center flex flex-row " >

    <i className='bi bi-people text-3xl font-semibold before:'></i>
    <b>friends</b>
    </div>
    </Link>
    <Link className="w-full"   href="/explore">
    <div  className="flex space-x-1 w-full p-2 border-b-2 w-full hover:text-[red] items-center flex flex-row " >

    <i className='bi bi-compass text-3xl font-semibold before:'></i>
    <b>explore</b>
    <span className="text-white bg-red-400 p-1 rounded text-xs">new</span>
    </div>
    </Link>
    <Link className="w-full"   href="/following">
    <div  className="flex space-x-1 w-full p-2 border-b-2 w-full hover:text-[red] items-center flex flex-row " >

    <i className='bi bi-person-plus text-3xl font-semibold before:'></i>
    <b>Following</b>
    </div>
    </Link>
    <Link className="w-full"   href="/">
    <div  className="flex space-x-1 w-full p-2 border-b-2 w-full hover:text-[red] items-center flex flex-row " >

    <i className='bi bi-camera-video text-3xl font-semibold before:'></i>
    <b>LIVE</b>
    </div>
    </Link>
    <Link className="w-full"   href="/profile">
    <div  className="flex space-x-1 w-full p-2 border-b-2 w-full hover:text-[red] items-center flex flex-row " >

    <i className='bi bi-person text-3xl font-semibold before:'></i>
    <b>profile</b>
    </div>
    </Link>
</div>
{!islogin ?
<div className="flex flex-col items-center text-center w-full">
    <p className="text-gray-400 text-sm">Log in to follow creators, like videos,and view comments</p>

<AlertDialogTrigger className="w-full h-fit p-2 m-auto  border-2 mx-2 text-[red] rounded
 bg-white hover:bg-gray-100 hover:text-red-500  border-red-500">Login</AlertDialogTrigger>

</div>:"" }
    </div>
</aside>

  )
}

export default Barleft