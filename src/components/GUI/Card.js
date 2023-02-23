import React from "react";

import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
    // Above we have passed the extra class with the name of "props.className" as this class is coimg from "AddUser" component where we have wrapped the form with this "Card" component.So by using this template string (``) we can get another class which is been passing from another component to our card component.The name can be anyting like here if we used "className" as a prope is because it has been declared with th same name in "AddUser" component.
  );
}

export default Card;
