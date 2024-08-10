"use client"
import { useEffect, useRef, useState } from "react"
import Lonader from "../loader/lonader"
import { SendSequest } from "./send"
import { useToast } from "../ui/use-toast"
import { uploadingFile } from "../context/fileuploading"
import { useRouter } from "next/navigation"
// import { useToast } from "./ui/use-toast"
const Main = () => {
  const { toast } = useToast()
    const [datax, setdata] = useState({
      
        "id": '',
        "userid": '',
        "title":'',
        "description":'',
        "filefor":'',
    })

    function filterWordsStartingWithHash(sentence) {
      // Split the sentence into words
      const words = sentence.split(/\s+/);
      
      // Filter out words starting with '#'
      const filteredWords = words.filter(word => !word.startsWith('#'));
      
      // Join the remaining words back into a sentence
      const filteredSentence = filteredWords.join(' ');
      
      return filteredSentence;
    }
    const [isloading, setisloading] = useState(false)
    const file = useRef()
    const setdataform =(e)=>{
        const {name, value} = e.target
        
        setdata((e)=> {

          return {...e,[name]:value}
        })
    }
    const setdataformfile = async(e)=>{
        const {name, value} = e.target
        const filsd = file.current.files[0]
        console.log(filsd.size <= 104857600)
        if (filsd.size <= 104857600){
        
      
      const filsd = file.current.files[0]


      const data = new FormData()
      data.append('file',filsd)
      await uploadingFile(data) 
      .then(rex =>{
        datax.filefor = rex
       
        setdata((ez)=> {

          return {...ez,['filefor']:rex}

        })
        console.log(datax.filefor)
            setisloading(true)

      }
       )
console.log(datax)
  
  }else {
    toast({
      title: 'error',
      description: 'file cant be more than 100mb',
      
    })
  }
    }
    const forsubm = useRef()
useEffect(() => {
  const sessionData = sessionStorage.getItem('userData');
  const userData = JSON.parse(sessionData);

  setdata((e)=> {

    return {...e,['id']:userData?.id}
  })
  setdata((e)=> {

    return {...e,['userid']:userData?.uuid}
  })
}, [])

const linkx =  useRouter()
let onsubmitted = async (ex)=>{
  ex.preventDefault()
if ( datax.filefor ){

  const sessionData = sessionStorage.getItem('userData');
  const userData = JSON.parse(sessionData);
  

  await SendSequest(datax)
  .then(sd =>{
   
    linkx.push('/profile')
    forsubm.current.reset()
    toast({
      title: 'success',
      description: 'POST UPLOADED SUCESSFULLY ',
      
    })
  })
    .catch(ere => {
    toast({
      title: 'error',
      description: ere,
      
    })

  })
}
else {
  toast({
    title: 'error',
    description: 'Input Can"t be Null',
    
  })

}
}
return (
  <section className="flex w-full max-md:flex-col h-[89vh] max-md:h-fit ">
   <div className="w-1/2 h-full max-md:w-full flex  items-center   justify-center">
 <div className=" w-1/2 max-md:w-full relative max-md:h-full border border-r-3 rounded overflow-hidden border-black h-[80%]">
   {isloading ? 
    <video src={datax?.filefor}
    controls muted className="w-full h-full grow"   />
  :
  <Lonader className/>}
   </div>
   </div>
   <div className="w-1/2  max-md:w-full ">
   <form method="post" ref={forsubm} onSubmit={onsubmitted} className="flex flex-col w-full h-full items-center justify-center p-3 space-y-3">

        <input type="text" name="title" required onChange={setdataform} placeholder="title " className="w-[90%] p-2 border border-gray-500" /> 
        <input type="text" name="description"  required onChange={setdataform} placeholder="description "  className="w-[90%] h-20 p-2 border border-gray-500" /> 

        <input type="file" name="file" required   accept=".mp4,.webp" ref={file} onChange={setdataformfile}   className="w-[90%] p-2 border border-gray-500" /> 
   <button type="submit" className="bg-red-700 text-white p-2 w-1/2">POST</button>
   </form>
   </div>
    </section>
  )
}

export default Main