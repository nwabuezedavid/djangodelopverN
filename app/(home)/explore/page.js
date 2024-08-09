import Barleft from "@/app/(components)/bar1";
import Main from "@/app/(components)/expo/Main";
import Navx from "@/app/(components)/nav";
import Image from "next/image";


export default  function page() {

  return (
<>
<section className="w-full max-md:w-screen   h-screen flex flex-col">

  
<main className="w-full items-start flex  h-1/7 justify-center ">

<Navx />
</main>
<main className="w-full items-start justify-center flex grow    ">
<div className="w-[90%] max-md:w-full bg-white h-[100%] overflow-hidden flex max-w-[1888px] ">
  

<Barleft/>
<aside className="w-[80%] max-md:w-full">

<Main/>

</aside>

</div>
</main>
</section>


</>
  );
}


