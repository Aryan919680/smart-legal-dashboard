import React from "react";
export default function DashboardCard({ title, value, subtext, link }) {
    return (
      <div className="bg-white rounded-lg shadow p-4 w-full md:w-64">
        <div className="text-sm font-medium text-gray-600">{title}</div>
        <div className="text-2xl font-bold text-gray-800 mt-2">{value}</div>
        {subtext && <div className="text-sm text-blue-600 mt-1">{subtext}</div>}
        {link && <div className="text-sm mt-1 text-blue-500 underline cursor-pointer">{link}</div>}
      </div>
    );
  }
  