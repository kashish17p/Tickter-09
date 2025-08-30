
"use client";
import { useState } from "react";
import Image from "next/image";

export default function LocationSearch() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelect = (place) => {
    setSelectedLocation(place);
    
  };

  const places = ["Manik chowk", "Rajendra Nagar", "Boring Road"];

  return (
    <div className="flex justify-center mt-10">
         <Image src="/Group" alt="Location" width={100} height={100}/>
          {/* Search Section */}
          <div className="bg-white rounded-2xl p-6 shadow-md w-[500px]">
        {/* Detect + OR + Input */}
        <div className="flex items-center gap-4 justify-center mb-6">
          <button className="bg-black text-white px-4 py-2 rounded-full font-semibold">
            Detect my Location
            <div className="text-xs font-normal">Using GPS</div>
          </button>
          <span className="text-gray-500 font-normal">or</span>
          <input
            type="text"
            placeholder="manik chowk"
            className="px-4 py-2 border rounded-full outline-none w-48 placeholder:text-sm placeholder:text-gray-500 text-gray-800"
          />
        </div>

        {/* Location Results */}
        <div className="space-y-3">
          {places.map((place, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg shadow-sm"
            >
              <div>
                <div className="font-bold text-black">{place}</div>
                <div className="text-gray-500 text-sm">
                  5 km away &bull; 15 mins
                </div>
              </div>
              <button
                onClick={() => handleSelect(place)}
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

