import React from "react";
import Dashboard from "@/components/common/Dashboard";

{
  const d = new Date("2025-03-27");

  const dateStr = d.toDateString();

  return (
    <>
      <div className="full_year" id="dateDisplay">
        {dateStr}
        <Dashboard />
      </div>
    </>
  );
}

export default Dashboard;
