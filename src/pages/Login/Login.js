import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
    <div className="form">
      <form className="signIn">
      <h1>Sign In</h1>

        <h5>E-mail</h5>
        <input type="email" />
        <h5>Password</h5>
        <input type="password" />
        <button type="submit" className="Login__signInButton">
          Sign In
        </button>
      </form>
      <p>
        By signing-in you agree to the AI-Generated Posters Conditions of Use &
        Sale. Please see our Privacy Notice, our Cookies Notice and our
        Interest-Based Ads Notice.
      </p>
      <button className="Login__registerButton">
        Create your AI-Generated Posters Account
      </button>
    </div>

    </div>
  )

}

export default Login;
