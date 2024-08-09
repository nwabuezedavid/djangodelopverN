import Link from "next/link"


const Headerprof = () => {
  return (
    <section className='flex flex-col w-full h-fit p-2 '>
        <div className=" flex w-fit h-fit space-x-2">
          <span className=" flex w-fit h-fit  ">
            <b>0</b>
            <p className='text-gray-600 capitalize ml-1'>following</p>
          </span>
          <span className=" flex w-fit h-fit ">
            <b>0</b>
            <p className='text-gray-600 capitalize ml-1'>followers</p>
          </span>
          <span className=" flex w-fit h-fit ">
            <b>0</b>
            <p className='text-gray-600 capitalize ml-1'>Likes</p>
          </span>
        </div>
        <p className="p-2 flex w-full">UX/Ui Design inspiration</p>
      <div className="p-4 pb-0 flex w-full space-x-5">
        <Link href="" >
        <b className='w-fit px-4 hover:border-b-2 p-2 border-b-2 border-b-black  hover:border-b-black'>Videos</b>
        </Link>
        <Link href="" >
        <b className='w-fit px-4 hover:border-b-2 p-2 
         hover:border-b-black'>Liked</b>
        </Link>
      
      </div>
    </section>
  )
}

export default Headerprof