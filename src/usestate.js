import React, { useState } from "react";

function User() {
  const [Name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your Fullname"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Your name is : {Name}</h3>
    </div>
  );
}

export default User;
