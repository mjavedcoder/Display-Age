import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersInput, setUsersInput] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersInput((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList lists={usersInput} />
    </div>
  );
}

export default App;
