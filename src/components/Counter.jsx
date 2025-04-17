import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const nemeh = () => {
    setCount((prev) => prev + 1);
  };

  const hasah = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button onClick={nemeh}>
        <ChevronUp size={32} />
      </button>
      <p style={{ fontSize: "24px" }}>{count}</p>
      <button onClick={hasah}>
        <ChevronDown size={32} />
      </button>
    </div>
  );
};

export default Counter;
