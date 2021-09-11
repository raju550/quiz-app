import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./pages/Checkbox";
export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="answer"></Checkbox>
    </div>
  );
}
