"use server"

import { db } from "@/lib/prisma";

export const lSdRgis = async (data) => {

   
    const {username, email} = data
    
    try {
      const  check = await db.user.findFirst({
        where: {
          OR: [
              { username: username },
              { email: email }
          ]
      }
        
      })
      console.log(check);
      if ( check === null ){
  
        const usercreated = await db.user.create({
          data:data
        })
        
        
        return { data: usercreated}
      }else{
  
        return { miss: 'username and email  already exist' }
      }
  
  } catch (error) {
    console.log(error);
    return { error: `'error'${error}` }
  }
}
export const loginSd = async (data) => {
  console.log(data);
  
    
  

    try {
      
   
    const actualuser = await db.user.findFirst({
      where:{
        OR:[
          
          {username:data.username,password:data.password},
          
        ]
        
      }
    })
    if(actualuser){
      return {'data':actualuser}
    }else{
      return {miss:'user was not found '}
      
    }
  } catch (error) {
    
    return {error:error}
  }
}