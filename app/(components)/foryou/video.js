
"use client"
import { Check, Heart, MessageCircle, Share2 } from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useEffect,useState, forwardRef } from 'react';
import { AlertDialogTrigger } from '../ui/alert-dialog';
import  Lonader  from './../loader/lonader';
import { Loaded } from '../loader/loaded';
import { SendSequestvideo } from './send';
import { addFollower, followUser, videoLiked } from './addfollwer';
import Image from 'next/image';
const Videocontaer = forwardRef ((data,ref) => {
  const videoplayer =  useRef(null);
  const {params,serparam,paramsx,serparamx,setvideo,} =data.value
  setvideo.current = videoplayer.current
  const heightckli = useRef(null);
  
  const playing  =  ()=>{
    load &&  videoplayer.current.play()
  } 
  const playingpause =  ()=>{
    load &&  videoplayer.current.pause()
    
 
  }
  useEffect(() => {
    setTimeout(() => {
      videoplayer.current.play();
  }, 2000); 
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the video is visible
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(videoplayer.current)videoplayer.current.play();
            if (entry.isIntersecting) {
                // Start playing the video
                videoplayer?.current.play().catch(error => console.error('Autoplay error:', error));
            } else {
                // Pause the video when out of view
                if(videoplayer){

                  videoplayer?.current.pause();
                }
            }
        });
    }, options);

    if (heightckli.current) {
        observer.observe(heightckli.current);
    }

    return () => {
        if (heightckli.current) {
            observer.unobserve(heightckli.current);
        }
    };
}, [videoplayer]);
  
  
  const [load, setload] = useState(false);
  const [useridx, setid] = useState();
  const [isfolling, setfolloe] = useState();
  
  

  useEffect(  () =>  {
    
    
  
    setload(true)
    if (videoplayer.current) {
      // Setup interval to log currentTime and duration every second (for example)
      const intervalId = setInterval(() => {
      
        if (videoplayer.current.currentTime == videoplayer.current.duration) {
          // scrollingd()
          serparam(heightckli.current.clientHeight)
        }
      }, 1000); // Log every 1000ms (1 second)
  
      // Cleanup function to clear interval on component unmount
      return () => {
        clearInterval(intervalId);
      };
    }
   
    
  }, [paramsx]);


useEffect(() => {
  let ss = sessionStorage.getItem('userData')
  
  const manidata =JSON.parse(ss)
  setid(manidata)
  
  addFollower(manidata?.id, data.data.user.id)
  .then(data => setfolloe(data))
  .catch(e => console.log(e))
 
 
}, [])

  async function checfollower() {
    let ss = sessionStorage.getItem('userData')
  
    const manidata =JSON.parse(ss)
    setid(manidata)
    
  }
  async function follower() {
    let ss = await sessionStorage.getItem('userData')
    checfollower()
    const manidata = await JSON.parse(ss)
    try {
      // Assuming userId and userToFollowId are valid IDs from your database
      const userId = manidata?.id;
      const userToFollowId = data.data.user.id;
  
      // Follow userToFollowId
      const followingResult = await followUser(userId, userToFollowId);
  
      // Add follower with userId and userToFollowId
       addFollower(userId, userToFollowId)
      .then(data => setfolloe(data))
      .catch(e => console.log(e))
  
    } catch (error) {
      console.error('Error:', error);
    } 
  }
  

  
  

  return (
    <section ref={heightckli}  id='298yhi2u3y87'  className='flex relative mt-2 min-h-full flex-col w-full h-full'>
      
      <div className='flex  flex-col w-full h-full items-center'>
        <span className="flex w-[90%] max-md:w-full  h-fit p-2 justify-between items-center gap-2">
          <Image width={0} height={0}   src='/logo.png' className='w-10 h-10 rounded-full' alt='Profile Avatar' />
          <small className='grow max-md:w-[50%]'>
            <p className='flex w-fit truncate items-center '>
              <strong>{data.data?.user?.username}</strong> <Check className="h-2 mx-1 bg-cyan-300 text-white w-2 p-1 rounded-full" /><b></b>
            </p>
            <p className='truncate'>{data.data?.title}</p>
            <p className='truncate'>{data.data?.dis}</p>
            <small className='flex w-fit p-1 space-x-1'>

              <Link href='/'>#dance</Link>
              <Link href='/'>#fyl</Link>
              <Link href='/'>#tik</Link>
            </small>
          </small>
          {useridx?.uuid ?  
          <p onClick={()=> follower()} className={`w-[120px] ${isfolling  == "follow" ? "!bg-black text-white":''} cursor-pointer items-center justify-center flex h-fit p-2 m-auto border-2 mx-2 rounded bg-white hover:bg-black hover:text-red-50 border-gray-500`}>
         {isfolling }
          </p>:<AlertDialogTrigger className="w-[120px] items-center justify-center flex h-fit p-2 m-auto border-2 mx-2 rounded bg-white hover:bg-black hover:text-red-50 border-gray-500">
            login
          </AlertDialogTrigger>
          }
        </span>

        <div className='w-[70%] max-md:w-full flex relative p-2 max-md:rounded-lg h-[75%] rounded-xl'>
          
        {load? 
          <div onMouseMove={playing}   onMouseLeave={playing} className='w-2/3 max-md:w-full  relative h-full rounded-xl'>
            <Link href={`/post/${String(data.data?.url)}`} >
            
              <video
                
                className='w-full bg-black max-md:w-full rounded-lg h-full flex'
                
                ref={videoplayer}
                autoPlay
                muted
                onLoadedMetadata={()=>setload(true)}
                // Call handleVideoEnd when the video ends
              >

                <source src={data.data?.file} type="video/mp4" />
              </video>
            </Link>
          </div>: 
          <Lonader className='grow w-full right-0 flex' />}
          <div className='w-fit flex flex-col items-center max-md:absolute right-4 max-md:h-fit max-md:p-2 max-md:rounded-lg max-md:bg-[white] bottom-0 justify-end gap-2 p-2 h-full p-3'>
            <big onClick={()=> videoLiked(data.data.id,useridx?.id ,data.data.likescount)}   className='flex flex-col w-fit cursor-pointer text-center'>
              <Heart fill='red' className='w-fit  animate-pulse delay-150 h-fit p-2 rounded-full text-red-300 bg-red-100' />
              <small>{data?.data?.likescount}</small>
           
            </big>
            <big className='flex flex-col  w-fit text-center cursor-pointer'>
              <MessageCircle fill='black' className='w-fit animate-bounce h-fit p-2 rounded-full bg-gray-100' />
              <small>{data?.data?.comment?.length}</small>
              {console.log(data?.data,'data?.data?.comment?')}
            </big>
            <big className='flex text-center flex-col w-fit cursor-pointer'>
              <Share2 fill='black' className='w-fit h-fit p-2 animate-pulse rounded-full bg-gray-100' />
              <small>123k</small>
            </big>
          </div>
        </div>
      </div>
    </section>
  );
})
Videocontaer.displayName = 'Videocontaer';
export default Videocontaer;
