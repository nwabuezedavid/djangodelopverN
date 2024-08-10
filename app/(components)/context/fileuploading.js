"use server";
import { extname, join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import * as dateFn from "date-fns";

function sanitizeFilename(filename) {
  return filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, "_");
}

export async function uploadingFile(request) {
  // Parse the form data to get the file
  const formData = await request.formData();
  const file = formData.get("file");

  if (!file) {
    return {
      error: "File blob is required.",
      status: 400,
    };
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  // Define the base and upload directories
  const pathDist = join(process.cwd(), "public/images");
  const relativeUploadDir = `${dateFn.format(Date.now(), "dd-MM-y")}`;
  const uploadDir = join(pathDist, relativeUploadDir);

  try {
    // Ensure the base directory exists
    await mkdir(pathDist, { recursive: true });

    // Ensure the upload directory exists
    await mkdir(uploadDir, { recursive: true });
  } catch (e) {
    console.error(
      "Error while trying to create directories when uploading a file\n",
      e
    );
    return {
      error: "Something went wrong while creating directories.",
      status: 500,
    };
  }

  try {
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const fileExtension = extname(file.name);
    const originalFilename = file.name.replace(/\.[^/.]+$/, "");
    const sanitizedFilename = sanitizeFilename(originalFilename);
    const filename = `${sanitizedFilename}_${uniqueSuffix}${fileExtension}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);

    const finalFilePath = `${relativeUploadDir}/${filename}`;
    console.log("filename : " + finalFilePath);

    return {
      filePath: finalFilePath,
    };

  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return {
      error: "File upload failed.",
      status: 500,
    };
  }
}
