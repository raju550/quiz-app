import React from "react";
import image from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";
export default function Video({ title, id, noq }) {
  return (
    <div>
      <div className={classes.video}>
        <img
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
        />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total: {noq * 5}</p>
        </div>
      </div>
    </div>
  );
}
