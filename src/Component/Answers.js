import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./pages/Checkbox";
export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="answer"></Checkbox>
    </div>
  );
}
