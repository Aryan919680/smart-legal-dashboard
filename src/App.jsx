import React from 'react';
import './index.css';
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 max-h-screen overflow-y-auto">
        <TopNav />
        <Dashboard />
      </div>
    </div>
  );
}
