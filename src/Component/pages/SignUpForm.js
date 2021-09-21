import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";
import classes from "../../styles/Singup.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { signup } = useAuth();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("don't match password");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("failed you account");
    }
  }
  return (
    <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></TextInput>
      <TextInput
        type="eamil"
        required
        placeholder="Enter your email"
        icon="person"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <TextInput
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
      ></TextInput>
      <Checkbox
        text="I agree to the terms &amp;conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        required
      ></Checkbox>
      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account?
        <Link to="/login">Login</Link>
      </div>
    </Form>
  );
}
