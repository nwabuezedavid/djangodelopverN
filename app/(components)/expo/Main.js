"use client"
import { useEffect, useState } from 'react';
import PostX from './card';
import { NavTopic } from './nav';
import { exploreD } from './api';
import { useParams } from 'next/navigation';
const Main = () => {
  const [locationx,seclocation] = useState('')
// useEffect(()=>{
//   if (typeof window !== 'undefined') {
//     seclocation(window?.location?.href);
//   }
// },[])

const [search, setSearch] = useState('');
const [datax, setdata] = useState([])
const [setd, setsetd] = useState('')
useEffect(() => {
  if (typeof window !== 'undefined') {
    seclocation(window.location.href);
  }
}, []);

useEffect(() => {
  if (locationx) {
    const url = new URL(locationx);
    const searchParam = url.searchParams.get('find');
    setSearch(searchParam || '');
    setsetd(searchParam || '');
  }
}, [locationx]);
   
useEffect(() => {
  exploreD(setd)
  .then(e=>{
    console.log(e )
    setdata(e)
  })
  console.log(setd )
}, [setd])

  
  return (
    <div className='w-full h-full '>
      <NavTopic data={setsetd}/>
      <main className='flex w-full flex-wrap'>
        {datax?.map((e,id) =><PostX key={id} value={e}/>)}


      </main>
    </div>
  )
}

export default Main

// { Array.from({ length: 5 }, () => (
//     <Star fill="#111" strokeWidth={0} />
// ))}