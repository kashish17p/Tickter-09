"use client";
import React from "react";

export default function TicketCard({ event }) {
  return (
    <div className="min-w-[380px] max-w-[380px] bg-gradient-to-r from-[#DE6262] to-[#FFB88C] rounded-2xl p-4  shadow-lg text-white">
      {/* Header section */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold">{event.title}</h2>
          <p className="text-sm text-gray-100">{event.venue}</p>
        </div>
        <div className="bg-white text-[#DE6262] text-xs font-extrabold px-5 py-1 rounded-md uppercase tracking-wider">
          {event.price}
        </div>
      </div>

      {/* Date & Time */}
      <div className="mt-4">
        <p className="text-sm font-bold">
          {event.date} at {event.time}
        </p>
      </div>

      {/* Register button */}
      <div className="mt-3">
        <button className="w-full bg-gray-100 text-[#DE6262] font-extrabold py-2 rounded-md tracking-widest uppercase hover:bg-gray-200 font-bungee">
          REGISTER
        </button>
      </div>
    </div>
  );
}
