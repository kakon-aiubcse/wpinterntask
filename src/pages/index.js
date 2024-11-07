import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex space-x-6 items-center justify-center p-4 underline">
        <Link
          href="/chats"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg p-2 rounded-md"
        >
          WhatsApp Chats
        </Link>
        <Link
          href="/chat"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg p-2 rounded-md"
        >
          WhatsApp Chat
        </Link>
        <Link
          href="/profile"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg p-2 rounded-md"
        >
          WhatsApp Profile
        </Link>
      </div>
    </>
  );
}
