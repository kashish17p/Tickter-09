

"use client";
import React from "react";

export default function TicketCard({ event }) {
  return (
    <div className="min-w-[400px] max-w-[400px] bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl p-5 shadow-md text-white">
      {/* Header section */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold">{event.title}</h2>
          <p className="text-sm text-gray-100">{event.venue}</p>
        </div>
        <div className="bg-white text-pink-500 text-xs font-bold px-3 py-1 rounded-md">
          {event.price}
        </div>
      </div>

      {/* Date & Time */}
      <div className="mt-4">
        <p className="text-sm font-semibold">
          {event.date} at {event.time}
        </p>
      </div>

      {/* Register button */}
      <div className="mt-5">
        <button className="w-full bg-gray-100 text-pink-600 font-bold py-2 rounded-md hover:bg-gray-200">
          REGISTER
        </button>
      </div>
    </div>
  );
}


