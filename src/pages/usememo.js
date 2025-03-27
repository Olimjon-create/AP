import React, { useState } from "react";
import "../styles/usememo.css";
export const Controllid = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ flex: 1 }}>
      <h1 className="btn-text">Count: {count}</h1>
      <button className="btn" onClick={() => setCount(count - 1)}>
        {" "}
        ➖{" "}
      </button>
      <button className="btn" onClick={() => setCount(count + 1)}>
        ➕
      </button>
    </div>
  );
};

export default React.memo(Controllid);
