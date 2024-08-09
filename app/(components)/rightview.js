"use client"
import Link from 'next/link'
import { Button } from './ui/button'
import { Clipboard, Facebook, Github,ArrowBigDownDash, Heart, Instagram, MessageCircle, MessageCircleCode, MessageCircleCodeIcon, MessageCircleDashed, MessageCircleHeart, MessageCircleHeartIcon, Music, Music2, PanelTopCloseIcon, PersonStanding, Share2Icon, Train, Twitter, WatchIcon, ArrowBigDownDashIcon } from 'lucide-react'
import { Input } from './ui/input'
import { contextxall } from './context/navs';
import { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import { getPost,creatComment } from './universalupst';
import Image from 'next/image'

const Rightview = ({data}) => {
  const {id,data:datax,setdata:detdatax,setsetmessage,setmessage,creatcommet} = data
  let login = true
  const {
    togvidvie,
    settogvidvie,
  } = useContext(contextxall)
 
 


  return (
    <main className={`w-1/4 max-md:w-full relative ${!togvidvie && 'max-md:hidden'}  max-md:h-1/2 max-md:bg-white  max-md:absolute bottom-0 left-0 grow flex-col relative items-center flex h-full overflow-hidden   overflow-y-auto`}>
    <ArrowBigDownDash value='close' onClick={()=>settogvidvie(false)}  className="sticky hidden  max-md:flex top-[0px] z-[9999] rounded-full h-10 w-10 p-3 text-white bg-red-500 hover:bg-black  left-0 " size={30}>
      close
      </ArrowBigDownDash>
      <div className="w-full bg-[#c6cee134] h-fit flex  items-center m-6 rounded flex-col ">
      <div className='w-[90%] flex justify-between h-fit  items-center'>
        <Image height={0} width={0} src={datax?.user?.profileImage ? datax?.user?.profileImage :'/logo.png' } className='w-10 h-10 rounded-full'/>
        <span className='w-2/4 grow p-2'>
          <p className="font-bold text-sm capitalize">{datax?.user?.username}</p>
          <small>Tyler Yerisc -{String(datax?.createdAt)} </small>
        </span>
        <button  className=" font-medium bg-red-600 hover:bg-black text-white px-6 py-2">
          follow
          </button>
      </div>
<div className=" w-[90%] flex flex-wrap truncate">
  <p className="">{datax?.title}</p>
  <span className="*:text-blue-500 space-x-2">
    {datax?.hashtag?.map( e=>  <Link href="/" key={e.id}  >{e}
   </Link>)}
  
  
     </span>
     <span className="flex w-full items-center  p-2 space-x-2">
      <Music  size={19}/> 
    <p className=" text-sm text-gray-500">Original Sound - Shenseea</p>
     </span>
     
</div>
      </div>
<div className="flex flex-col w-full items-center justify-center">
<span className=" flex w-fit">
  <small className="flex w-fit h-fit p-2 items-center space-x-1">
    <Heart className='red-red-200'/>
    <b>{datax?.likes?.length}</b>
  </small>
  <small className="flex w-fit h-fit p-2 items-center space-x-1">
    <MessageCircleHeartIcon className='red-red-200'/>
    <b>{datax?.comment?.length}</b>
  </small>
  <small className="flex w-fit h-fit p-2 items-center space-x-1">
    <Share2Icon className='red-red-200'/>
    <b>{datax?.views}</b>
  </small>
  <span className="flex w-fit h-fit gap-x-1">
    <Link href="href" >
    <Facebook className="text-white h-fit w-fit p-2 rounded-full bg-blue-700"/>
    </Link>
    <Link href="href" >
    <Instagram className="text-[brown] h-fit w-fit p-2 rounded-full"/>
    </Link>
    <Link href="href" >
    <Twitter className="text-cyan-400 h-fit w-fit p-2 rounded-full"/>
    </Link>
    <Link href="href" >
    <Train className='h-fit w-fit p-2 rounded-full'/>
    </Link>
    <Link href="href" >
    <Github className='h-fit w-fit p-2 rounded-full'/>
    </Link>
  </span>
</span>
  <span className="flex items-center w-fit px-2 my-3 border border-gray-200">
     <input
      type="text"
      id="id"
      name="name"
      readOnly
      placeholder="link"
      value={datax?.url}
      className="w-[300px]  border-none rounded-lg py-3 px-5 outline-none	bg-transparent"
     />
     <Clipboard/>
     </span>
</div>
<div className="flex w-full  items-center justify-center text-center border-b-2 border-b-gray-200   ">
<b className="flex space-x-1 w-fit items-center"><p>Comments ({datax?.comment?.length})</p> <MessageCircleCode  /></b>
</div>
{datax?.comment?.map( e=>
<div key={e.id} className=" h-fit p-2 flex items-center justify-start gap-x-4 p-4 mt-[7%] w-[90%]">
<Image height={0} width={0} src={e.user.profileImage ? e.user.profileImage :'/logo.png' }  alt="micheal james"  className='w-9 h-9 rounded-full '/>
<span className="flex flex-col w-full grow  text-wrap word-wrap">
<b className="text-sm">{e?.user?.username}</b>
<p className="text-gray-500 w-full text-[90%] h-[50px] p-2 overflow-hidden overflow-y-auto ">
{e?.content}
</p>
<small className="flex text-red-400 ">{String(e.createdAt)}</small>
</span>

</div>
)
}
<div className="sticky w-full bottom-0  top-[100%]   left-0 h-[90px] bg-red">
{login ? 
<form className="w-full  bottom-0 flex p-4   items-center " onSubmit={creatcommet} method="">


<Input  placeholder='Comment Here' onChange={(e)=>setsetmessage(e.target.value)} className="p-4 flex outline-none focus:outline-none border-none flex-col h-full grow border-none"/>
<button className="inline-flex items-center gap-2 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-lg h-[60px]">
  <MessageCircleDashed/>
</button>
</form>

:
<center className="p-4">Log In to comment</center>
}
</div>
    
    </main>
  )
}

export default Rightview