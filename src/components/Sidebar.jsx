import React from "react";
import {
  FaTachometerAlt,
  FaUserFriends,
  FaFileAlt,
  FaTasks,
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaChartBar,
  FaCog,
  FaQuestionCircle
} from "react-icons/fa";

const menu = [
  { label: "Dashboard", icon: <FaTachometerAlt /> },
  { label: "Client Management", icon: <FaUserFriends /> },
  { label: "DOC Management", icon: <FaFileAlt /> },
  { label: "Task Management", icon: <FaTasks /> },
  { label: "Biling and Disbursment", icon: <FaFileInvoiceDollar /> },
  { label: "Lien Management", icon: <FaBalanceScale /> },
  { label: "Report and Analytics", icon: <FaChartBar /> },
  { label: "Settings", icon: <FaCog /> },
  { label: "Support and Fedeback", icon: <FaQuestionCircle /> },
];

export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-gray-200 w-60 h-screen p-6 flex flex-col gap-6 shadow-lg">
      <h1 className="text-2xl font-extrabold tracking-wide text-white">Smart Legal</h1>
      <div className="flex flex-col gap-2">
        {menu.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-2 rounded-md cursor-pointer transition-all hover:bg-gray-700 hover:text-white"
          >
            <div className="text-lg">{item.icon}</div>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
