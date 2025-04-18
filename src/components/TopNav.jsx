import React from "react";

export default function TopNav() {
  return (
    <div className="bg-gray-800 text-gray-100 flex justify-between items-center px-6 py-3 shadow-md">
      <div className="text-xl font-bold tracking-wide">📊 Personal Dashboard</div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-mono">⏱ 00:00:00</div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition">
          Create New +
        </button>
      </div>
    </div>
  );
}
