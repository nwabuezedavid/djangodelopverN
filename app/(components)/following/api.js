"use server"

import { db } from "@/lib/prisma"



export async function foollingCideo( mainuser) {

  


  if (mainuser){

    try {
    
 
      let  thefolervode;
  const thevideofind = await db.followerdbs.findMany({
where: {
 followingid:mainuser,
 NOT:{

   followerid:mainuser 
 },
 
}, 
select:{
    follower:{
        select:{
            videos:{
                select:{
                    file:true,
                    user:true,

                }
            }
        }
    }
}
  })
//  thevideofind.map( async e=> {
//      thefolervode = await db.user.findFirst({
// where:{
// id :e.followerid
// }
//     })
// })

console.log(thevideofind);
return thevideofind
    }

catch(e){
console.log(e);
}

  }


}
export async function followinfeeach( mainuser) {

  


  if (mainuser){

    try {
    
 
     
  const thevideofind = await db.followerdbs.findMany({
where: {

  NOT:{
    followerid:mainuser},
  following:{
    followers:{
      some:{
        followingid:mainuser
      }
    }
  }
 
 
}, 
select:{
    follower:{
        select:{
            videos:{
                select:{
                    file:true,
                    user:true,

                }
            }
        }
    }
}
  })
//  thevideofind.map( async e=> {
//      thefolervode = await db.user.findFirst({
// where:{
// id :e.followerid
// }
//     })
// })

console.log(thevideofind, 'follesjsj');
return thevideofind
    }

catch(e){
console.log(e);
}

  }


}