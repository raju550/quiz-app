import React from "react";
import classes from "../../styles/Singup.module.css";
import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustration";
import TextInput from "./TextInput";

export default function Login() {
  return (
    <div>
      <>
        <h1>Create an account</h1>
        <div className="column">
          <Illustration></Illustration>
          <Form style={{ height: "330px" }} className={`${classes.signup}`}>
            <TextInput
              type="eamil"
              placeholder="Enter your email"
              icon="person"
            ></TextInput>
            <TextInput
              type="password"
              placeholder="Enter password"
              icon="lock"
            ></TextInput>
            <Button>
              <span>Submit Now</span>
            </Button>
            <div className="info">
              Register here
              <a href="SingUp.html">SingUp</a>
            </div>
          </Form>
        </div>
      </>
    </div>
  );
}
