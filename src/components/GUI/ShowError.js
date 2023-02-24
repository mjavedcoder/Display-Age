import React from "react";
import styles from "./ShowError.module.css";
import Card from "./Card";
import Button from "./Button";

function ShowError(props) {
  return (
    <div>
      <div className={styles.blur} onClick={props.onCancel} />
      <Card className={styles.display}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.message}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.footer}>
          <Button onClick={props.onCancel}>Alright</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ShowError;
