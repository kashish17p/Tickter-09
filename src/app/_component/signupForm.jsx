// "use client";
// import { useState } from "react";

// export default function SignupForm({ onSignup, switchToSignin }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         onSignup({ name, email });
//       }}
//     >
//       <h2 className="text-lg font-bold mb-2">Sign Up</h2>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter your name"
//         className="w-full p-2 border rounded mb-2"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//         className="w-full p-2 border rounded mb-2"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter password"
//         className="w-full p-2 border rounded mb-2"
//       />
//       <button className="w-full bg-yellow-400 py-2 rounded-lg">Sign Up</button>
//       <p className="mt-2 text-sm">
//         Already have an account?{" "}
//         <span
//           onClick={switchToSignin}
//           className="text-blue-500 cursor-pointer"
//         >
//           Sign In
//         </span>
//       </p>
//     </form>
//   );
// }
