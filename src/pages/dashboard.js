import React from "react";

function Dashboard() {
  const d = new Date("2025-03-27");

  const dateStr = d.toDateString();

  return (
    <>
      <div className="full_year" id="dateDisplay">
        {dateStr}
      </div>
    </>
  );
}

export default Dashboard;
