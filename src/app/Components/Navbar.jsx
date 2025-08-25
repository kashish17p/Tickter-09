"use client";
import { useState } from "react";
import { FaUserCircle, FaHeart } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [formType, setFormType] = useState("signin");

  const handleLogin = (e) => {
    e.preventDefault();
    
    setUser({ name: "there!" });
    setIsOpen(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    setUser({ name: "" });
    setIsOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-md">
      
      <h1 className="text-2xl font-bold">
        <span className="text-yellow-400">Bu.fi</span> tickter
      </h1>

      
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for events and activities"
          className="px-4 py-2 rounded-l-lg text-black"
        />
        <button className="bg-yellow-400 px-4 py-2 rounded-r-lg">
          🔍
        </button>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg">
          Create Event
        </button>
        <FaHeart size={24} className="cursor-pointer" />
        <FaUserCircle
          size={28}
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Dropdown (Profile / Auth Forms) */}
      {isOpen && (
        <div className="absolute right-6 top-20 bg-white text-black p-6 rounded-xl shadow-lg w-80">
          {user ? (
            // If logged in
            <div className="text-center">
              <h2 className="text-lg font-bold">
                Hello <span className="text-yellow-600">{user.name}</span>
              </h2>
              <button
                onClick={handleLogout}
                className="mt-4 w-full bg-yellow-400 py-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            // If not logged in
            <div>
              {formType === "signin" ? (
                <form onSubmit={handleLogin}>
                  <h2 className="text-lg font-bold mb-2">Sign In</h2>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <button className="w-full bg-yellow-400 py-2 rounded-lg">
                    Sign In
                  </button>
                  <p className="mt-2 text-sm">
                    New here?{" "}
                    <span
                      onClick={() => setFormType("signup")}
                      className="text-blue-500 cursor-pointer"
                    >
                      Sign Up
                    </span>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleSignup}>
                  <h2 className="text-lg font-bold mb-2">Sign Up</h2>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <button className="w-full bg-yellow-400 py-2 rounded-lg">
                    Sign Up
                  </button>
                  <p className="mt-2 text-sm">
                    Already have an account?{" "}
                    <span
                      onClick={() => setFormType("signin")}
                      className="text-blue-500 cursor-pointer"
                    >
                      Sign In
                    </span>
                  </p>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
