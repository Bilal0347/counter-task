import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2>Current count {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px",
          fontSize: "15px",
          fontWeight: "bold",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: "lightgray",
          border: "none",
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Counter;
