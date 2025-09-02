
"use client";
import { useState } from "react";
import Image from "next/image";


export default function LocationSearch() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelect = (place) => {
    setSelectedLocation(place);
    
  };

  const places = [
  { name: "Manik chowk", distance: "5 km", time: "15 mins" },
  { name: "Rajendra Nagar", distance: "8 km", time: "25 mins" },
  { name: "Civil Lines", distance: "12 km", time: "35 mins" },
   ];

  return (
    <div className="flex justify-center mt-10">
         

         
          {/* Search Section */}
          <div className=" relative bg-gray-200 rounded-3xl p-13 shadow-md w-[600px]">
            
            <Image 
  src="/location.svg" 
  alt="Location" 
  width={80} 
  height={80} 
  className="absolute top-[-40px] left-1/2 transform -translate-x-1/2"
  />

        {/* Detect + OR + Input */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button className="bg-black text-white px-4 py-2 rounded-full font-normal w-80">
            Detect my Location
            <div className="text-[8px] font-normal">Using GPS</div>
          </button>
          <div className="text-black font-normal">
            
            <svg width="40" height="40">
            <circle cx="20" cy="20" r="18" stroke="#ccc" strokeWidth="2" fill="white" />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="#333">or</text>
            </svg>

            </div>


          <input
            type="text"
            placeholder="manik chowk"
            className="bg-white px-4 py-2 rounded-full outline-none w-55 placeholder:text-sm placeholder:text-gray-500 text-gray-800"
          />
        </div>

        {/* Location Results */}
        <div className="space-y-3">
          {places.map((place, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg shadow-sm"
            >
              <div>
                <div className="font-bold text-black">{place.name}</div>
                <div className="text-black text-xs">
                  {place.distance} away &bull; {place.time}
                  
                </div>
              </div>
              <button
                onClick={() => handleSelect(place.name)}
                className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800"
              >
                Select
              </button>
            </div>
          ))}
        </div>

        {/* Selected Location */}
        {selectedLocation && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            
          </div>
        )}
      </div>
    </div>
  );
}

