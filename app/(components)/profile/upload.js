"use client"
// pages/upload.js
import { useEffect, useState } from 'react';
import { Checjksk } from './checjksk';


export default function Upload() {
  
  const [file, setFile] = useState(null);
  // Keep file extensions


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.value);
  };
useEffect(() => {
 
}, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (file) {
      // Initialize a new FileReader object
      // const reader = new FileReader();

      // // Define a callback function to execute after reading
      // reader.onload = function(event) {
      //     // event.target.result contains the Base64-encoded image data
      //     const imageData = event.target.result;
      //     console.log(imageData); // This is the Base64 string
      //     saveBase64AsFile(imageData, 'shdhj') 
      //     // You can now use imageData as needed, e.g., send it to a server
      // };

      // // Read the file as a Data URL (which results in Base64 format)
      // reader.readAsDataURL(file);

  // }
    // Assuming you have a route handler to handle file upload
    const formData = new FormData();
    formData.append('file', file);
    

    const response = await fetch('/api/img', {
      method: 'POST',
      body: formData,  
    });

    if (response.ok) {
      console.log('File uploaded successfully!');
    } else {
      console.error('Failed to upload file.');
    }
  };

  return (
    <div>
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit} >
        <input type="file"  onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
