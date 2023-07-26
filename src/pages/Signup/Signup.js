import React, {useState} from "react";
import Logo from "../../DesignAssets/images/PosterGeniusV2.png"; //the ../ is to go back one folder
import {auth} from "../../firebase";
import {Link, useNavigate} from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Signup() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div className="login__container">
        <img src={Logo} alt="PosterGenius-V2" className="login__img" />
        <div className="login__form">
          <h2 className="login__header">Create your account</h2>
          <form>
            <input
              type="text"
              placeholder="Enter your Name"
              className="login__input"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your Email"
              className="login__input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="login__input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your Password again"
              className="login__input"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <button type="submit" onClick={register} className="login__button">
              Continue
            </button>
            <span>
              By continuing, you agree to PosterGenius' Condtions of Use and
              Privacy Notice
            </span>
          </form>
        </div>
        <div className="login__create">
          <span>Already have an account? </span>
          <Link to="/login2">
            <a href="#">Sign in</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
