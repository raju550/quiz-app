import React, { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import classes from "../../styles/Singup.module.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { login } = useAuth();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("failed you login");
    }
  }
  return (
    <Form
      style={{ height: "330px" }}
      className={`${classes.signup}`}
      onSubmit={handleSubmit}
    >
      <TextInput
        type="eamil"
        placeholder="Enter your email"
        icon="person"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>
      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Register here
        <Link to="/signup">SignUp</Link>
      </div>
    </Form>
  );
}
