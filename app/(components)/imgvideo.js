"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react"

const Post = () => {
    const plyarfe = useRef();
   const playing =()=>{
        plyarfe.current.play()
    }
   const playingpause =()=>{
        plyarfe.current.pause()
    }
  return (
    <div onMouseMove={playing} onMouseLeave={playingpause} className="flex max-sm:w-full max-md:w-1/2 max-md:flex-grow   flex-col w-[200px] h-fit  m-2 rounded">
  <Link href="/book">
  <main className=" rounded relative w-full h-[230px]  bg-black">
    <video ref={plyarfe}  src="/logo.mp4" pause preload='true' muted poster='lays.jpg'   className='w-full rounded h-full' >
    </video>
    <div className="flex  w-full absolute flex-col top-0 left-0 w-full h-full items-start justify-end text-white bg-gradient-to-t l  ">
        <span className="flex bg-gradient-to-b from-[#ffffff5b] to-black w-full  items-center justify-between p-2 space-x-1">
<span className=" flex items-center space-x-2">

        <Image alt="asdas" src="/logo.png" className='w-4 h-4 rounded-full'  />
        <h2 className="text-[50%]">MIchael Jame</h2>
</span>
        <big className="flex  text-xs w-fit">123k Likes </big>

        </span>
    </div>
  </main>
  </Link>
  <p className="truncate"> 
  This site can’t be reachedThe connection was reset.
Try:

Checking the connection
Checking the proxy and the firewall
Running Windows Network Diagnostics
ERR_CONNECTION_RESET
  </p>
  </div>
  )
}

export default Post