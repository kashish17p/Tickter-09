
"use client";
import { useState } from "react";

export default function LoginForm({ onLogin, switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin({ email });
      }}
    >
      <h2 className="text-lg font-bold mb-2">Sign In</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full p-5 border rounded mb-6"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="w-full p-2 border rounded mb-2"
      />
      <button className="w-full bg-yellow-400 py-2 rounded-lg">Sign In</button>
      <p className="mt-2 text-sm">
        New here?{" "}
        <span
          onClick={switchToSignup}
          className="text-blue-500 cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </form>
  );
}
