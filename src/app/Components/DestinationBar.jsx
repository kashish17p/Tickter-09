"use client";
import React from "react";
import { SlLocationPin } from "react-icons/sl";

export default function DestinationBar() {
  return (
   
    <div className=" hidden md:flex w-full bg-yellow-400 py-6 px-8 flex items-center text-start justify-between rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <SlLocationPin className="w-18 h-20 text-white mx-4" />
        <div>
         <h2 className="text-xl font-bold text-black">Bundelkhand University</h2>
         <p className="text-black text-sm">Bundelkhand campus Jhansi, near Shivaji nagar 
         </p>
        </div>
        </div> 
      
      <button className="bg-gray-800 text-white text-sm font-medium w-30 h-12 rounded-lg">Change</button>
      
    </div>
  );
}