import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
      <h2 className="text-4xl font-bold mb-4 text-blue-700">Welcome to You Me Know</h2>
      <p className="text-lg text-gray-700 max-w-xl">
        This is your space to explore, learn, and connect. We’re glad you’re here.
      </p>
    </div>
  );
}
