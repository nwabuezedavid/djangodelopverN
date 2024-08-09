import Barleft from "@/app/(components)/bar1";
import Main from "@/app/(components)/foryou/Main";
import Navx from "@/app/(components)/nav";
import Image from "next/image";



export default  function Home() {

  return (
<>
<section className="w-full max-md:w-screen  overflow-hidden h-screen flex flex-col">

  
<main className="w-full items-start flex  h-[20%] justify-center ">

<Navx />
</main>
<main className="w-full items-start justify-center flex    h-[100%]  ">
<div className="w-[90%] max-md:w-full bg-white h-[100%] flex max-w-[1888px] ">
<Barleft/>
<aside className="w-[80%] h-full     max-md:w-full">
<Main/>



</aside>

</div>
</main>
</section>


</>
  );
}


