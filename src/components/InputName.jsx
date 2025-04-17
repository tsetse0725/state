import { useState } from "react";

const InputName = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={handleChange}
      />
      <p>{name}</p>
    </div>
  );
};

export default InputName;
