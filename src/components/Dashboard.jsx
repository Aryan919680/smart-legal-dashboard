import React from "react";
import DashboardCard from "./DashboardCard";
import RadarChart from "./RadarChart";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-10">
      
      {/* Radar Chart Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Case Document Strength Comparison
        </h2>
        <div className="flex justify-center">
          <RadarChart />
        </div>
      </div>

      {/* Today's Agenda */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Today's Agenda</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <DashboardCard
            title="Tasks Due Today"
            value="0"
            subtext="You have no tasks due today"
          />
          <DashboardCard
            title="Calendar Events"
            value="0"
            subtext="You have no events scheduled for today"
          />
        </div>
      </section>

      {/* Hourly Metrics */}
      <section className="space-y-4 border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Hourly Metrics for Vishal Sharma
        </h2>
        <DashboardCard
          title="Billable Hours Target"
          value="0 Hours"
          subtext="Target: 1.9 Hours"
        />
      </section>

      {/* Billing Metrics */}
      <section className="space-y-4 border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Billing Metrics for Firm
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <DashboardCard
            title="Draft Bills"
            value="0"
            link="Create new bills"
          />
          <DashboardCard
            title="Unpaid Bills"
            value="0"
            link="Approve from Draft or Pending"
          />
          <DashboardCard title="Overdue Bills" value="0" />
        </div>
      </section>
    </div>
  );
}
