import { DotIcon, Link2 } from "lucide-react"
import Link from "next/link"
import Post from "./imgvideo"
import Headerprof from "./headerprof"
import Image from "next/image"

const OtherProfile = () => {
  return (
    <section className="w-full h-full  flex flex-col ">
<main className=" flex  w-6/8  max-md:w-full h-auto p-8 items-center flex-row p-1 justify-between">
    <span className="flex w-1/2 space-x-2 items-center ">
    <Image src="/logo.png" alt="" className="w-16 h-16 rounded-full"  />
<small className="flex flex-col  ">
    <h1 className="text-4xl font-semibold">#tryshdt</h1>
    <p className="font-bold">32 Post</p>
</small>
    </span>
<small className="flex items-center space-x-2">

<button className="inline-flex items-center justify-center px-8 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-lg h-fit py-2 capitalize hover:bg-black">
    follow
</button>

</small>
</main>

<Headerprof/>
<main className=" flex w-full mt-2  flex-wrap">
 
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>

</main>
    </section>
  )
}

export default OtherProfile