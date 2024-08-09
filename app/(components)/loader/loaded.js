"use client"
import React, { useEffect, useState } from 'react'
export const Loaded = () => {

  if (typeof window !== 'undefined') {
    // Check if window object is defined (client-side)
    return document.readyState === 'complete';
  } else {  
    // For server-side rendering (SSR), assume page is always "loaded"
    return true;
  }
  


 
}
