"use server"

import { db } from "@/lib/prisma"



export async function videoLiked(videoid, user, count) {

  


  if (videoid){

    try {
    
 

  const thevideofind = await db.video.findFirst({
where: {
  id: videoid,
  likes: {
    some:{
      userId:user
    }
  }

}
  })
  if (!thevideofind){
  const thevideo = await db.video.update({
    where:{
      id:videoid
    },
    data:{
      likescount:count+1,
        likes:{
          create:{
            userId:user,
           

          }
        }
        }
    }) 
    return thevideo
  }else{
      return 'error'
    }
  
    } catch (error) {
      console.error('Error following user:', error);
      throw error;
    } 
  }

}
export async function followUser(userIdx, userToFollowIdx) {

  


  if (userToFollowIdx){

    try {
      
      // Check if the follow relationship already exists
     const usercurrent = await db.user.findUnique({where:{id:userIdx}})
     const userfollowing = await db.user.findUnique({where:{id:userToFollowIdx}})
     const isfollowing = await db.followerdbs.findFirst({
      where:{
           followerid: userfollowing.id, followingid: usercurrent.id,
     
     }})
     if (!isfollowing){
   
     const following = await db.followerdbs.create({
      data:{
      followerid:userfollowing.id,
      followingid:usercurrent.id
     }})
     console.log("folling", following);
     return  following
    }else{

return {'error': 'already'}
     }
  
    } catch (error) {
      console.error('Error following user:', error);
      throw error;
    } 
  }

}

export async function addFollower(userIdx, userToFollowIdx) {
  if (userIdx && userToFollowIdx){
  const usercurrent = await db.user.findUnique({where:{id:userIdx}})
     const userfollowing = await db.user.findUnique({where:{id:userToFollowIdx}})
     const isfollowing = await db.followerdbs.findFirst({
      where:{
           followerid: userfollowing.id, followingid: usercurrent.id,
     
     }})
     const isfollower = await db.followerdbs.findFirst({
      where:{
           followerid: usercurrent.id, followingid:userfollowing.id,
     
     }})
     if (!isfollowing){ 
      console.log('following back');
      
      return "follow"


     } else if (isfollower ){
      console.log('follow ing');

      return "following"
     } else{
      console.log('follow back');
     return  'follow back'
     }
    }
}


