import React, {useState} from "react";
import {db} from "../../firebase";
import Logo from "../../DesignAssets/images/PosterGeniusV2.png"; //the ../ is to go back one folder
import {auth} from "../../firebase";
import {Link, useNavigate} from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {setDoc, doc, collection, getDocs} from "firebase/firestore";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
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
          setDoc(doc(db, "users", auth.user.uid), {
            uid: auth.user.uid,
            name: name,
            email: email,
            phoneNumber: "",
            address: "",
            city: "",
            province: "",
            PostalCode: "",
            country: "",
            profilePicture: "",
          });

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
          {/* if error is a truthy - && says render the following code */}
          {/* Add this line */}
          <form>
            <input
              type="text"
              placeholder="First Name"
              className="login__input"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="login__input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              // always apply login_input, but check if the value of error is true, if it is, then apply input-error, else apply nothing (denoted by empty string)
              className={`login__input ${
                error === "Passwords do not match" ? "input-error" : ""
              }`}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password confirmation"
              className={`login__input ${
                error === "Passwords do not match" ? "input-error" : ""
              }`}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}{" "}
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
