"use client"
import React, { useEffect, useRef,useState } from 'react'
import Videocontaer from './video'
import Sujestint from './Sujestint'
import { AllPost } from './allpost'

const Main = () => {
  const perri = useRef(null)
  const aminperri = useRef(null)
  const setvideo = useRef(null)
  const [isVisible, setIsVisible] = useState(false);
  const [params,serparam] = useState(0)
  const [paramsx,serparamx] = useState(0)
  const childRef = useRef(null);
  function scrollingd() {
    perri.current.scrollTo({
      top: params,
      behavior: 'smooth' // Optional: smooth scrolling
    });
  }
  useEffect(() => {
    scrollingd()
  }, [params])  


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting);
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    if (childRef.current) {
        observer.observe(childRef.current);
    }

    return () => {
        if (childRef.current) {
            observer.unobserve(childRef.current);
        }
    };
}, [isVisible]);


const [datasxx, setdatas] = useState()
const [usersd, usernameset] = useState()

useEffect(()=>{
  let data = sessionStorage.getItem('userData')
  let mainuser = JSON.parse(data)
  AllPost()
 
  .then(datxa => { 
   console.log();
   setdatas(
   datxa.filter(e=> {
    return e.user.username != mainuser?.username  
   } ))
  //  if( datxa[0].user.username !== mainuser?.username ){
  //    setdatas(datxa)
  //   }else if (!mainuser.uuid){
  //    setdatas(datxa)
     
  //   }else{
  //    setdatas(datxa)

  //  }

  })

  
},[])
  

  return (
    <section ref={aminperri} className="flex flex-row h-full w-full">
        <main ref={perri} className='w-[70%] max-md:w-full flex overflow-y-auto flex-col items-center h-full'>
          {datasxx?.map(ex =>  <Videocontaer key={ex.id} data={ex} forwardedRef={childRef}  value ={{params,serparam,paramsx,serparamx, setvideo}}  />
          )}
        </main>
        <main className='w-[30%] max-md:hidden'>
          <Sujestint/>
        </main>
    </section>
  )
}

export default Main