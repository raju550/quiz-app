import React from "react";

import Illustration from "./Illustration";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div>
      <>
        <h1>Create an account</h1>
        <div className="column">
          <Illustration></Illustration>
          <LoginForm></LoginForm>
        </div>
      </>
    </div>
  );
}
