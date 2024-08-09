"use client";

import { Heart, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PostX = ({value}) => {
console.log(value)


  const plyarfe = useRef();
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
      className="flex max-sm:w-full bg-[snow] p-3 max-md:w-1/2 max-md:flex-grow   flex-col w-[240px] grow h-fit  m-2 rounded"
    >
      <Link href={`post/${value?.url}`}>
        <main className=" rounded relative w-full h-[230px]  bg-black">
          <video
            ref={plyarfe}
            src={value?.file}
            pause
            preload="true"
            muted
            poster="lays.jpg"
            className="w-full rounded h-full"
          ></video>
          <div className="flex  p-2  w-full absolute flex-col top-0 left-0 w-full h-full items-start justify-end text-white bg-gradient-to-t l  ">
          
              <big className="flex  text-xs w-fit flex items-center"> <Play/> 123k Likes </big>
       </div>
        </main>
      </Link>
      <p className="truncate">
        {value?.description}
      </p>
      <div className="flex  w-full  flex-col top-0 left-0 w-fit h-fit items-start justify-end text-white bg-gradient-to-t l  ">
        <span className="flex  w-full  *:text-black items-center justify-between p-2 space-x-1">
          <span className=" flex items-center space-x-2">
            <Image width={0} height={0}  src="/logo.png" className="w-4 h-4 rounded-full" alt="" />
            <h2 className="text-[50%] truncate  ">{value?.user?.username}</h2>
          </span>
          <big className="flex  text-xs w-fit flex items-center">
            {" "}
            <Heart size={20} /> 123k Likes{" "}
          </big>
        </span>
      </div>
    </div>
  );
};

export default PostX;
