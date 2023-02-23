import React from "react";
import Card from "../GUI/Card";

import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.lists.map((list) => (
          <li key={list.id}>
            {list.name}({list.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
