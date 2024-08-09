"use client"
import { useEffect, useState } from 'react';
import { followinfeeach } from '../following/api';
import PostX from './card';
import { NavTopic } from './nav';
const Main = () => {
 const [dataxx, setdatas] = useState()
  useEffect(() => {
    let ss =  sessionStorage.getItem('userData')
    
    const manidata =  JSON.parse(ss)
    // AllPost()
    followinfeeach(manidata?.id,)
 
  .then(datxa => { 
    
  //  console.log(datxa);
   setdatas( datxa )
  })
  }, [])
  

  
  return (
    <div className='w-full h-full '>
  
      <main className='flex w-full flex-wrap'>
{dataxx?.map(e=><PostX key={e.id} data={e}/> )}
  {console.log(dataxx)}
      </main>
    </div>
  )
}

export default Main

// { Array.from({ length: 5 }, () => (
//     <Star fill="#111" strokeWidth={0} />
// ))}