"use client";
import { useState } from "react";
// import { FaUserCircle, FaHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
// import { FaRegHeart } from "react-icons/fa"; 
import { FaRegUser, FaRegHeart } from "react-icons/fa";



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
    <nav className="flex justify-between items-center px-10 py-4 bg-black text-white shadow-md">
      
      <div className="flex items-center space-x-2 mb-6">
        <h1 className="text-5xl font-bold text-yellow-500">Bu.fi</h1>
        <h1 className="text-5xl font-bold text-grey-300">tickter</h1>
      </div>


      <div className="relative w-160">
  <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500" size={24} />
  <input
    type="text"
    placeholder="Search for events and activities"
    // 
    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-black text-base placeholder:text-sm placeholder:text-gray-400"

  />
</div>

    
      <div className="flex items-center gap-4">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg">
          Create Event
        </button>
      </div>  
        
      <div className="flex items-center gap-4">
  {/* Outlined Heart Icon */}
  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center border-yellow-400">
    <FaRegHeart size={24} className="text-yellow-400 cursor-pointer" />
  </div>

  {/* Outlined User Icon */}
  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center border-yellow-400">
    <FaRegUser
      size={26}
      className="text-yellow-400 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    />
  </div>
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
