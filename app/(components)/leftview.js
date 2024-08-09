"use client"
import { useEffect, useRef, useState } from 'react';
import { ArrowBigDownDash, ArrowBigUpDash, Command, HandHeartIcon, Heart, HeartCrack, MessageCircle, SendIcon, X } from "lucide-react"
import { contextxall } from './context/navs';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { getPost } from './universalupst';
import Image from 'next/image';


const SidelEview = ({data}) => {
  const {id,data:datax,setdata:detdatax} = data
console.log({id,data:datax,setdata:detdatax})
const {
  togvidvie,
  settogvidvie,
} = useContext(contextxall)
const pros = useRouter()
    const [like, setlike] = useState(false);
  
  const videoon = useRef();
  useEffect(() => {
    videoon.current.play()
  }, []);
  const toglecx = ()=>{
    getPost('data', datax.id + 1)
    .then(d => {
      // pros.push(`/post/${d.url}`)
      
      history.pushState({
        id: d.id
    }, d.title, ` ../../post/${d.url} `);
      detdatax(d)
    
    })
   }
  const toglecxll = ()=>{
    getPost('data', datax.id - 1)
    .then(d => {
  if (!d.err0){
    history.pushState({
      id: d.id
  }, d.title, ` ../../post/${d.url} `);
    detdatax(d)
  }
    
    })
   }

  

  useEffect(() => {
  
    
  }, [])
  return (
    <main  className="w-3/5 max-md:w-full relative h-full">
<Image src="/lay.jpg" height={0} width={0} alt="adasda" className="w-full h-full"/>
<div className=" absolute w-full  blur-2xl top-0 h-full left-0 bg-[#000000d6]">
</div>
<div className=" absolute w-full  w-full flex   top-0 h-full left-0 bg-[#00000076]">
<div className="w-1/4 max-md:absolute top-1 left-2 z-50">

<X  onClick={()=>pros.push('/')} className="w-fit  h-fit p-2  text-white bg-[#ffffff28] hover:border-2 cursor-pointer rounded-full"/>
</div>
<div className=" w-3/4 max-md:w-full h-full rounded-md relative bg-black">
<video src={datax?.file} ref={videoon}  loop className="w-full  rounded-md  h-screen m-0" controls></video>
<form className="absolute top-0 h-[20%] flex items-center justify-center left-0 w-full" action="" method="">
  <input type="text" placeholder="find Relative Content" name="" id="" value="" className=" w-[90%] h-fit rounded-full focus:border-none placeholder:text-white  p-2 bg-transparent text-center border-2 text-white border-[#ffffff8a]  " />
</form>
</div> 
<div className="w-1/4 flex max-md:absolute max-md:justify-evenly right-0  flex-col h-full justify-between items-end">
<b></b>
<span className="flex flex-col text-white w-fit gap-2  p-3">
<ArrowBigUpDash onClick={toglecx} className="bg-[#ffffff6c] hover:bg-black w-fit cursor-pointer h-fit p-4 rounded-full"/>
<ArrowBigDownDash onClick={toglecxll} className="bg-[#ffffff6c] hover:bg-black w-fit cursor-pointer h-fit p-4 rounded-full"/>

</span>
<span className="flex w-fit p-2 gap-2 max-md:flex-col *:text-[220px]">
 
 {like ? 
 <HandHeartIcon fill='red' size={40} className="  text-red-500 text-white font-extrabold"/>
: 
  <HandHeartIcon fill='red' size={40} className=" cursor-pointer hover:text-red-500 text-white font-extrabold"/>
}
<MessageCircle fill='red' onClick={()=>settogvidvie((e) => !!true)} size={40} className=" cursor-pointer hover:text-red-500 text-none font-extrabold"/>
</span>
</div>
</div>
</main>
  )
}

export default SidelEview