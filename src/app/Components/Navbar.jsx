

"use client";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser,} from "react-icons/fa";
import LoginForm from "./loginForm";
import SignupForm from "./SignupForm";
import Modal from "./Modal";
import Image from "next/image";
import { BiEnvelope, BiLockAlt, BiUser } from "react-icons/bi";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [formType, setFormType] = useState("signin");

  const handleLogin = (data) => {
    setUser({ name: "there!" }); 
    setIsOpen(false);
  };

  const handleSignup = (data) => {
    setUser({ name: data.name });
    setIsOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4  text-white shadow-md">
      <div className="flex items-center space-x-2 mb-1">
     <Image src='/logo.svg' alt="/logo" width={250} height={250}/>

      </div>

      <div className="relative w-160">
        <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500" size={24} />
        <input
          type="text"
          placeholder="Search for events and activities"
          className="w-full pl-55 pr-4 py-2 rounded-lg border border-gray-300 text-black text-base placeholder:text-sm placeholder:text-gray-400"
        />
      </div>

      {/* Create Event Button */}
      <div className="flex items-center gap-4">
        <button className="bg-yellow-400  font-bold text-black px-4 py-2 rounded-lg">
          Create Event
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-8">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center border-yellow-400">
          {/* <FaRegHeart size={28} className="text-yellow-400 cursor-pointer" /> */}
          <Image src="/heart.svg" alt="Heart Icon" width={24} height={24} />
          

        </div>
        
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center border-yellow-400">
          <FaRegUser
            size={25}
            className="text-yellow-400 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          
        </div>
      </div>
      


{isOpen && (
  <Modal onClose={() => setIsOpen(false)}>
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
      <div>
        {formType === "signin" ? (
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-extrabold mb-8">Sign in</h2>
            
            <div className="relative mb-2">
      <BiEnvelope className="absolute left-3 top-6 -translate-y-1/2 text-gray-700" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 p-3 border font-bold  rounded-2xl mb-2"
            />
            </div>
             <div className="relative mb-2">
      <BiLockAlt className="absolute left-3 top-6 -translate-y-1/2 text-gray-700" />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full pl-10 p-3 border font-bold rounded-2xl mb-2"
            />
            </div>
            <button className="w-full  font-bold bg-yellow-400 py-3 rounded-2xl">
              Sign In
            </button>
            <p className="mt-2 font-bold text-sm">
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
            <h2 className="text-2xl font-extrabold mb-8">Sign Up</h2>

            <div className="relative mb-2">
      <BiUser className="absolute left-3 top-6 -translate-y-1/2 text-gray-700" />

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full pl-10 p-3 border font-bold rounded-2xl mb-2"
            />
            </div>
            <div className="relative mb-2">
      <BiEnvelope className="absolute left-3 top-6 -translate-y-1/2 text-gray-700" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 p-3 border font-bold rounded-2xl mb-2"
            />
            </div>
            <div className="relative mb-2">
      <BiLockAlt className="absolute left-3 top-6 -translate-y-1/2 text-gray-700" />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full pl-10 p-3 border font-bold rounded-2xl mb-2"
            />
            </div>
            <button className="w-full bg-yellow-400 py-3 rounded-2xl font-bold">
              Sign Up
            </button>
            <p className="mt-2 font-bold text-sm">
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
  </Modal>
)}


      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-6 top-20 bg-white text-black p-6 rounded-xl shadow-lg w-80">
          {user ? (
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
            <div>
              {formType === "signin" ? (
                <LoginForm
                  onLogin={handleLogin}
                  switchToSignup={() => setFormType("signup")}
                />
              ) : (
                <SignupForm
                  onSignup={handleSignup}
                  switchToSignin={() => setFormType("signin")}
                />
              )}
            </div>
            
          )}
        </div>
      )}
      
    </nav>
  );
}
