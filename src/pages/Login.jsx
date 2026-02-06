import React from "react";

export const login = () => {
  return (
    <>
      <div>
        <label htmlFor="Username">Username</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" />
      </div>
    </>
  );
};
