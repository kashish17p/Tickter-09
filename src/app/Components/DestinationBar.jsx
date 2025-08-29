"use client";
import React from "react";
import { SlLocationPin } from "react-icons/sl";

export default function DestinationBar() {
  return (
   
    <div className="w-full bg-yellow-400 py-6 px-8 flex items-center justify-between rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          {/* <MapPin className="w-5 h-5 text-blue-600" /> */}
          <SlLocationPin className="w-22 h-20 text-white mx-4" />
          {/* <span className="text-3xl"></span> */}
        
        <div>
         <h2 className="text-xl font-bold text-black">Bundelkhand University</h2>
         <p className="text-black text-sm">
            Bundelkhand campus Jhansi, near Shivaji nagar
         </p>
        </div>
        </div> 
      
      <button className="bg-gray-800 text-white text-sm font-medium py-2 px-10 rounded-lg">Change</button>
      
    </div>
  );
}