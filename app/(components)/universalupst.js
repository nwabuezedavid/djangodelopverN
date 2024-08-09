"use server"

import { db } from "@/lib/prisma"


export const getPost = async (data,id)=>{
    
    
    try{
        if (id == ''){
        
        const get = db.video.findFirst({
            where:{
                url:data
            },
            include:{
                likes:true,
                hashtags:true,
                comment:{
                    include:{
                        user:true
                    }
                },
                user:true,
            }
        })
        return get
    }else{
        const get = db.video.findFirst({
            where:{
                id:id
            },
            include:{
                likes:true,
                hashtags:true,
                comment:{
                    include:{
                        user:true
                    }
                },
                user:true,
            }
        })
        
        if (get){

            return get
        }else{
            const get = db.video.findFirst({
            })
            return get
        }
    }
    }catch(err){
        console.log(err)
    }

}



export const creatComment = async (userid,id, content)=>{
    const creacomm =  await db.video.update({
        where:{
            id:id
        },
        data:{
            comment:{
                create:{
                    content:content,
                    userId:userid,
                    
                }
            }
        }
    })
}