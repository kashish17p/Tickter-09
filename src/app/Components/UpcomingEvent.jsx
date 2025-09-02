"use client";
import React, { useRef, useState } from "react";
import TicketCard from "./TicketCard";

const UpcomingEvent = () => {
  const events = [
    {
      id: 1,
      title: "Tedx Bundelkhand University",
      venue: "Gandhi auditorium, Bundelkhand University",
      date: "07 Sep 2025",
      time: "11:00 AM",
      price: "FREE",
    },
    {
      id: 2,
      title: "Tech Fest 2025",
      venue: "Main Hall, BU Jhansi",
      date: "15 Oct 2025",
      time: "10:00 AM",
      price: "FREE",
    },
    {
      id: 3,
      title: "Cultural Fest",
      venue: "Open Ground, BU",
      date: "20 Nov 2025",
      time: "5:00 PM",
      price: "FREE",
    },
    {
      id: 4,
      title: "Startup Pitch Competition",
      venue: "Seminar Hall, BU Incubation Center",
      date: "05 Dec 2025",
      time: "2:00 PM",
      price: "FREE",
    },
    {
      id: 5,
      title: "Annual Sports Meet",
      venue: "Sports Ground, Bundelkhand University",
      date: "12 Jan 2026",
      time: "9:00 AM",
      price: "FREE",
    },
    {
      id: 6,
      title: "AI & Robotics Workshop",
      venue: "Engineering Block, BU Jhansi",
      date: "22 Feb 2026",
      time: "10:30 AM",
      price: "FREE",
    },
    {
      id: 7,
      title: "Literary Fest",
      venue: "Central Library Auditorium, BU",
      date: "05 Mar 2026",
      time: "11:00 AM",
      price: "FREE",
    },
    {
      id: 8,
      title: "Hackathon 2026",
      venue: "Computer Science Lab, BU",
      date: "18 Apr 2026",
      time: "9:00 AM",
      price: "FREE",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);


  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const scrollToIndex = (i) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: i * width,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">

      <div className="hidden md:flex space-x-4 px-4 py-6 overflow-x-auto scrollbar-hide">
        {events.map((event) => (
          <TicketCard key={event.id} event={event} />
        ))}
      </div>


      <div className="md:hidden block">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          onScroll={handleScroll}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-full snap-center px-4"
            >
              <TicketCard event={event} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-3 h-3 rounded-full transition ${i === activeIndex ? "bg-orange-500" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;

