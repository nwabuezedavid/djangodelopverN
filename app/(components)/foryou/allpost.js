"use server"

import { db } from "@/lib/prisma"

export const AllPost =  async () => {

  const alldata =await db.video.findMany({
    
   include:{
    user:true,
    comment:true,
    hashtags:true,
likes:true,

    
   }
  })
  return alldata

}
