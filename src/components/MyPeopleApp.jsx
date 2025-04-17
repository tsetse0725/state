import { useState } from "react";

const peopleObject = [
  { id: 1, name: "boldoo", age: 41, isMarried: true },
  { id: 2, name: "bataa", age: 81, isMarried: true },
  { id: 3, name: "boloroo", age: 18, isMarried: false },
  { id: 4, name: "rapper/producer–twissu", age: 18, isMarried: false },
];

const MyPeopleApp = () => {
  const [users, setUsers] = useState(peopleObject);

  const removeUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const loverFinder = () => {
    setUsers((prev) => prev.filter((user) => !user.isMarried));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
        padding: "40px",
        borderTop: "1px solid #ddd",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>💘</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "350px",
            padding: "10px 20px",
            borderRadius: "10px",
            background: "#f0f0f0",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <p style={{ width: 120, fontWeight: "bold" }}>{user.name}</p>
            <p>{user.age} нас</p>
            <p>{user.isMarried ? "💍 гэрлэсэн" : "💔 гэрлээгүй"}</p>
          </div>
          <button
            onClick={() => removeUser(user.id)}
            style={{
              background: "white",
              color: "crimson",
              border: "1px solid crimson",
              borderRadius: 5,
              padding: "4px 10px",
              cursor: "pointer",
            }}
          >
            ❌
          </button>
        </div>
      ))}

      <button
        onClick={loverFinder}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        💌
      </button>
    </div>
  );
};

export default MyPeopleApp;
