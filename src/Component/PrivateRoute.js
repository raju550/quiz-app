import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props}></Component>}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
