"use server"

import { db } from "@/lib/prisma"



export async function exploreD( mainuser) {

  

console.log(mainuser)
 

    try {

 
     
  const thevideofind = await db.video.findMany({
    include:{
      user:true
    },
    where:{
       OR:[
        {title:{
            contains:mainuser,
            
        }},
        {description:{
            contains:mainuser
        }}

       ]
    }
  })

if (thevideofind) {
    
    return thevideofind
}else{
    const thevideofind = await db.video.findMany({ include:{
        user:true
      },})
    return thevideofind

}
    }

catch(e){
console.log(e);
}



}
