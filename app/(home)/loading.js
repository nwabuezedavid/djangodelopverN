import Image from "next/image"

const page = (className) => {
    return (
      <div className={`'w-full h-full ${className} bg-white absolute top-0  min-w-full items-center flex justify-center`}>
          <Image src='/pre.webp' width={0} height={0} alt="shdh"  className='w-fit h-fit'/> 
      </div>
    )
  }
  export default page 
    