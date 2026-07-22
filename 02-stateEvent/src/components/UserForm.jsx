import React, { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleAgeChange = (e) => {
    setUser({ ...user, age: e.target.value });
  };

  return (
    <div>
      <input type="text" placeholder="İsim" value={user.name} onChange={handleNameChange} />
      <input type="email" placeholder="Email" value={user.email} onChange={handleEmailChange} />
      <input type="number" placeholder="yaş" value={user.age} onChange={handleAgeChange} />
      <p>
        {user.name} - {user.email} - {user.age}
      </p>
    </div>
  );
};

export default UserForm;
