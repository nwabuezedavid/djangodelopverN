"use client";

import { Check, Heart, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef ,useState} from "react";
import Lonader from "../loader/lonader";

const PostX = (data) => {
  const plyarfe = useRef();
  const [isloaded ,setloaded ]=useState(false)
  const [dataloaded ,setdata ]=useState(false)
  useEffect(() => {
    
 
    if (plyarfe.current){

      plyarfe.current.currentTime= 2.3
    }
    setloaded(true)
  }, [])
  
  const playing = () => {
    plyarfe.current.play();
  };
  const playingpause = () => {
    plyarfe.current.pause();
  };
  return (
    <div
      onMouseMove={playing}
      onMouseLeave={playingpause}
      
      className="flex max-sm:w-full bg-[snow] p-3 max-md:w-1/2 max-md:flex-grow   flex-col w-[240px] grow  m-2 rounded"
    >
      <Link href="/Post">
        <main className=" rounded relative w-full h-[330px]  bg-black">
          {isloaded ? 
          <video
            ref={plyarfe}
            src={data?.data?.follower?.videos[0].file}
            pause
            preload="true"
            muted
            
            className="w-full rounded  h-full"
          ></video> :
          <Lonader className='grow w-full right-0 flex' />}
          <div className="flex  p-2  w-full absolute flex-col top-0 left-0 w-full h-full items-center justify-end text-white bg-gradient-to-t l  ">
          <h2 className='text-[140%] uppercase text-sm'>{data?.data?.follower?.videos[0].user?.username}</h2>
          <p className='flex w-fit text-[70%] truncate'> @{data?.data?.follower?.videos[0].user?.username} <Check className='w-3 h-3 p-0.5 text-white ml-1 rounded-full bg-cyan-300'/> </p>
          <button className="w-[80%] h-fit hover:bg-white text-red-800  py-2 rounded px-5 capitalize">view profile</button>
       </div>
        </main>
      </Link>
     
      
    </div>
  );
};

export default PostX;
