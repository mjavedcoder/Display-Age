import React, { useState } from "react";

import styles from "./AddUser.module.css";
import Card from "../GUI/Card";
import Button from "../GUI/Button";

function AddUser(props) {
  const [typedUserName, setTypedUserName] = useState("");
  const [typedAge, setTypedAge] = useState("");

  const inputUser = (event) => {
    if (typedUserName.length === 0 || typedAge.length === 0) {
      return;
    }
    if (+typedAge < 1) {
      return;
    }
    event.preventDefault();
    props.onAddUser(typedUserName, typedAge);
    setTypedAge("");
    setTypedUserName("");
  };

  const typedUserNameHandler = (event) => {
    setTypedUserName(event.target.value);
  };
  const typedAgeHandler = (event) => {
    setTypedAge(event.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={inputUser}>
        {/* //Above we have passed the clicked function with the name of "onSubmit" which is pointing at the function */}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={typedUserName}
          onChange={typedUserNameHandler}
        />
        {/* Above we have passed the function "typedUserNameHandler" in the event "onChange" to the input and this function is giving us the value which user put in the input everytime by updating the state */}
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={typedAge}
          onChange={typedAgeHandler}
        />
        {/* Above we have passed the function "typedAgeHandler" in the event "onChange" to the input and this function is giving us the value which user put in the input everytime by updating the state */}
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
export default AddUser;
