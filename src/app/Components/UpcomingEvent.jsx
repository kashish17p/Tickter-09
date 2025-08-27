

import React from "react";
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

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4 px-4 py-6">
        {events.map((event) => (
          <TicketCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;



