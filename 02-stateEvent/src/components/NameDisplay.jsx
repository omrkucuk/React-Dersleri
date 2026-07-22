import React, { useState } from "react";

const NameDisplay = () => {
  const [name, setName] = useState("Dünya");

  return (
    <div>
      <input
        type="text"
        placeholder="İsim gir"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Merhaba, {name}</p>
    </div>
  );
};

export default NameDisplay;
