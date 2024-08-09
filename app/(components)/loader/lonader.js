import Image from "next/image"

 const Lonader = (className) => {
  return (
    <div className={`'w-full h-full ${className} bg-white absolute top-0  min-w-full items-center flex justify-center`}>
        <Image height={100}  src='/pre.webp ' width={100} alt="ksksks"  className='w-fit h-fit'/> 
    </div>
  )
}
export default Lonader 
