"use server"
import { db } from '@/lib/prisma'
const fs = require('fs');
const path = require('path');
import * as dateFn from "date-fns";

export const SendSequest = async (data) => {
    try {
        // Create a new video record
        const newVideo = await db.video.create({
            data: {
                url: `${data.description}${crypto.randomUUID()}`,
                file: data.filefor,
                userId: data.id,
                description: data.description,
                title: data.title,
            }
        });

        // Update the user to associate the new video with their videos
        const updatedUser = await db.user.update({
            where: {
                uuid: data.userid
            },
            data: {
                videos: {
                    // Using nested create to associate the new video
                    connect: {
                        id: newVideo.id  // Connect the newly created video
                    }
                }
            },
            // Optionally select the videos field if needed
            select: {
                videos: true
            }
        });

        return updatedUser;

    } catch (error) {
        console.error('Error in SendSequest:', error);
        throw error;
    }
}
