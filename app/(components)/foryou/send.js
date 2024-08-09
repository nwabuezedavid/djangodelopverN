"use server"
import { db } from '@/lib/prisma'
const fs = require('fs');
const path = require('path');
import * as dateFn from "date-fns";

export const SendSequestvideo = async (data) => {
    try {
        // Create a new video record
        const newVideo = await db.video.findUnique({
           where:{
            id:data.id
           }
        });

        // Update the user to associate the new video with their videos
        const updatedUser = await db.user.update({
            where: {
                uuid: newVideo.userId
            },
           
            // Optionally select the videos field if needed
            select: {
                videos: true
            }
        });
console.log({"user":updatedUser,"video":newVideo});
        return {"user":updatedUser,"video":newVideo};

    } catch (error) {
        console.error('Error in SendSequest:', error);
        throw error;
    }
}
