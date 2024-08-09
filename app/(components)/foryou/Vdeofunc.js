"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Check, Heart, MessageCircle, Share2 } from 'lucide-react';
import Link from 'next/link';
import { AlertDialogTrigger } from '../ui/alert-dialog';
import Lonader from './../loader/lonader';
import Loaded from '../loader/loaded';
import Image from 'next/image';

const Videocontainer = (data) => {
  const videoplayer = useRef(null);
  const heightckli = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);

    const playing = () => {
      if (load && videoplayer.current) {
        videoplayer.current.play();
      }
    };

    const playingpause = () => {
      if (load && videoplayer.current) {
        videoplayer.current.pause();
      }
    };

    const inser = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playing();
          } else {
            playingpause();
          }
        });
      }, { threshold: 0.5 });

      if (videoplayer.current) {
        observer.observe(videoplayer.current);
      }

      return () => {
        if (videoplayer.current) {
          observer.unobserve(videoplayer.current);
        }
      };
    };

    inser();

    if (videoplayer.current) {
      const intervalId = setInterval(() => {
        inser();

        if (videoplayer.current.currentTime == videoplayer.current.duration) {
          // scrollingd()
          data.value.serparam(heightckli.current.clientHeight);
        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  return (
    <section ref={heightckli} className='flex relative mt-2 min-h-full flex-col w-full h-full'>
      <div className='flex flex-col w-full h-full items-center'>
        <span className="flex w-[90%] h-fit p-2 justify-between items-center gap-2">
          <Image width={0} height={0}   src='/logo.png' className='w-10 h-10 rounded-full' alt='Profile Avatar' />
          <small className='grow'>
            <p className='flex w-fit truncate'>
              <strong>Micheal James</strong> <Check className="h-4 bg-cyan-300 text-white w-4 p-1 rounded-full" /><b>david</b>
            </p>
            <p className='truncate'>Videocontainer Videocontainer Videocontainer? micgch</p>
            <small className='flex w-fit p-1 space-x-1'>
              <Link href='/'>#dance</Link>
              <Link href='/'>#fyl</Link>
              <Link href='/'>#tik</Link>
            </small>
          </small>
          <AlertDialogTrigger className="w-[120px] items-center justify-center flex h-fit p-2 m-auto border-2 mx-2 rounded bg-white hover:bg-black hover:text-red-50 border-gray-500">
            follow
          </AlertDialogTrigger>
        </span>

        <div className='w-[70%] flex relative p-2 h-[75%] rounded-xl'>
          {load ? (
            <div className='w-2/3 relative h-full rounded-xl'>
              <Link href='/Post'>
                <video
                  src='/logo.mp4'
                  className='w-full rounded-xl h-full flex'
                  ref={videoplayer}
                  muted
                />
              </Link>
            </div>
          ) : (
            <Lonader className='grow w-full right-0 flex' />
          )}
          <div className='w-fit flex flex-col items-center justify-end gap-2 p-2 h-full p-3'>
            <big className='flex flex-col w-fit cursor-pointer'>
              <Heart fill='black' className='w-fit h-fit p-2 rounded-full bg-gray-100' />
              <small>123k</small>
            </big>
            <big className='flex flex-col w-fit cursor-pointer'>
            <MessageCircle fill='black' className='w-fit hover:text-red-500 h-fit p-2 rounded-full bg-gray-100' />
              <small>123k</small>
            </big>
            <big className='flex flex-col w-fit cursor-pointer'>
              <Share2 fill='black' className='w-fit h-fit p-2 rounded-full bg-gray-100' />
              <small>123k</small>
            </big>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videocontainer;
