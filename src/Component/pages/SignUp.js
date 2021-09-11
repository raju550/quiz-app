import React from "react";
import classes from "../../styles/Singup.module.css";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Illustration from "./Illustration";
import TextInput from "./TextInput";
export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration></Illustration>
        <Form className={`${classes.signup}`}>
          <TextInput
            type="text"
            placeholder="Enter name"
            icon="person"
          ></TextInput>
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
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          ></TextInput>
          <Checkbox text="I agree to the terms &amp;conditions"></Checkbox>
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Already have an account?
            <a href="login.html">Login</a>
          </div>
        </Form>
      </div>
    </>
  );
}
