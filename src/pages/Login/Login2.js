import React, {useState} from "react";
import "./Login2.css";
import Logo from "../../DesignAssets/images/PosterGeniusV2.png"; //the ../ is to go back one folder
import {auth} from "../../firebase";
import {Link, useNavigate} from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); //stops the refresh

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="login__container">
        <img src={Logo} alt="PosterGenius-V2" className="login__img" />
        <div className="login__form">
          <h2 className="login__header">Sign in</h2>
          <form>
            <input
              type="text"
              placeholder="Enter your email"
              className="login__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="login__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot password?</a>
            <button type="submit" onClick={signIn} className="login__button">
              Continue
            </button>
            <span>
              By continuing, you agree to PosterGenius' Condtions of Use and
              Privacy Notice
            </span>
          </form>
        </div>
        <div className="login__create">
          <span>New to PosterGenius?</span>
          <Link to="/signup">
            <a href="#">Create an account</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login2;
