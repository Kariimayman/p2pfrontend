"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Auth() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  console.log(user)
  if (isLoading) return <div>Loading...</div>;
  if (user) {

  }
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 opacity-40 animate-pulse"></div>
          <div className="absolute w-1/2 h-1/2 bg-gradient-to-t from-blue-500 to-transparent rounded-full opacity-20 blur-2xl animate-spin-slow"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500 to-transparent rounded-full opacity-20 blur-3xl animate-ping"></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative flex flex-col items-center space-y-8 p-10 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg z-10">
        <h1 className="text-4xl font-bold">Welcome to Naqdi</h1>
        <Link
          className="transform hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 px-12 rounded-lg shadow-md"
          href={"/api/auth/login"}
        >
          LOGIN
        </Link>
      </div>
    </main>
  );
}