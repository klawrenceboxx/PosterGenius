import React, {useState} from "react";
import "./Login.css";
import Logo from "../../DesignAssets/images/PosterGeniusV2.png"; //the ../ is to go back one folder
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); //stops the refresh

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault(); //stops the refresh

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //it successfully created a new user with email and password

        if (auth) {
          const user = userCredential.user;

          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Login">
      {/* <div className="login__logo">
        <img className="logo__img" src={Logo} alt="AI-Generated Posters Logo" />
      </div> */}

      <div className="login__container1">
        <h1>Sign In</h1>

        <form className="signIn">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AI-Generated Posters Conditions of Use
          & Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your AI-Generated Posters Account
        </button>
      </div>
    </div>
  );
}

export default Login;
