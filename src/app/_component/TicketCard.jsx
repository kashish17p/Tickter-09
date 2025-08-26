<<<<<<< HEAD:src/app/Components/TicketCard.jsx

"use client";
import React, { useState } from "react";

export default function TicketCard() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    gmail: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Registration Successful!\n\nName: ${formData.fullName}\nDepartment: ${formData.department}\nGmail: ${formData.gmail}\nContact: ${formData.contact}`
    );
    setShowForm(false);
    setFormData({ fullName: "", department: "", gmail: "", contact: "" });
  };

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl p-5 shadow-md text-white mt-6">
      {/* Header section */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold">Tedx Bundelkhand university</h2>
          <p className="text-sm text-gray-100">
            Gandhi auditorium bundelkhand university.
          </p>
        </div>
        <div className="bg-white text-pink-500 text-xs font-bold px-3 py-1 rounded-md">
          FREE
        </div>
      </div>

      {/* Date & Time */}
      <div className="mt-4">
        <p className="text-sm font-semibold">07 Sep 2025 at 11:00 AM</p>
      </div>

      {/* Register button */}
      {!showForm ? (
        <div className="mt-5">
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-gray-100 text-pink-600 font-bold py-2 rounded-md hover:bg-gray-200"
          >
            REGISTER
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-5 bg-white p-4 rounded-lg text-gray-800"
        >
          <h3 className="text-lg font-bold mb-3">Register for Event 🎫</h3>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="gmail"
            name="gmail"
            placeholder="Gmail"
            value={formData.gmail}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            required
          />

          <div className="flex gap-2 mt-3">
            <button
              type="submit"
              className="flex-1 bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
=======
import React from 'react'

const TicketCard = () => {
  return (
    <div>
      
    </div>
  )
}

export default TicketCard
>>>>>>> 0702e6ecd02a4a59e9554fc4659bd284df1403ad:src/app/_component/TicketCard.jsx
