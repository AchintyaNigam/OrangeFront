'use client'

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import login from "../../pocketbase"; 

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const result = await login(username, password);
      
      // Check if the result has the expected structure
      if (result && result.token) {
        console.log("Login successful", result);
        
        // Redirect to another page after successful login
        router.push("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <main className="flex items-end justify-center min-h-screen bg-white relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.svg"
          layout="fill"
          objectFit="cover"
          alt="Background"
          priority
        />
      </div>
      <div className="flex flex-col justify-end items-center w-full max-w-md z-10 relative bg-white bg-opacity-0 p-10 rounded-lg">
        <div className="w-full mb-8">
          <p className="text-slate-950 text-4xl font-bold">Login</p>
        </div>
        <form onSubmit={handleLogin} className="w-full">
          <div className="py-4">
            <label className="text-sm text-slate-950 block mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-4 py-2 border text-slate-950 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="py-4">
            <label className="text-sm text-slate-950 block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border text-slate-950 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="flex justify-end pt-10 my-10">
            <button
              type="submit"
              className="bg-slate-500 text-white px-6 py-2 rounded-lg shadow-xl hover:bg-blue-600 transition duration-1000"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
