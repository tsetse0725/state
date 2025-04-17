import { useState } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const RandomColorBox = () => {
  const [bgColor, setBgColor] = useState("#cccccc");

  const handleClick = () => {
    setBgColor(getRandomColor());
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: bgColor,
        cursor: "pointer",
        borderRadius: "8px",
        border: "2px solid #333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
      }}
    >
      ДАРААЧ!!!!
    </div>
  );
};

export default RandomColorBox;
