"use client"
import SidelEview from "@/app/(components)/leftview"
import Rightview from "@/app/(components)/rightview"
import { getPost,creatComment } from "@/app/(components)/universalupst"
import { useEffect, useState } from "react"


const Page = ({params}) => {
const {id} = params 
const [data, setdata] = useState()
const [setmessage, setsetmessage] = useState()
const [sent, setss] = useState()
const creatcommet =(e)=>{
  e.preventDefault()
  let ss =  sessionStorage.getItem('userData')
  
  const manidata =  JSON.parse(ss)
  if (setmessage){
    creatComment(manidata?.id,data?.id, setmessage)
    setss('skdkd')
  }
}
useEffect(() => {
  getPost(id, '')
    .then(d => {
   
      setdata(d)
      
    })
}, [sent, id])

 
  
  return (
    
    <section className="w-full flex   max-md:w-screen h-screen ">
       <SidelEview data={{id,data,setdata,setmessage,
setsetmessage}}/>
       <Rightview  data={{id,data,setdata,setsetmessage,setmessage,creatcommet}} />
</section>
  )
}

export default Page