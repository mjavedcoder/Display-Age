import React from "react";

function AddUser(props) {
  const InputUser = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={InputUser}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age(Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
}
export default AddUser;
