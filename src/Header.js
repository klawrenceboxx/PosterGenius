import React, {useEffect, useState} from "react";
import {auth} from "./firebase";
import {Link} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "./firebase";
import {useStateValue} from "./StateProvider";
import "./Header.css";
import Logo from "./DesignAssets/images/PosterGeniusV2.png"; //the ../ is to go back one folder
import Cart from "./DesignAssets/images/Cart.png";
import "./DesignAssets/fonts/Poppins-Regular.ttf";

//rfce, BEM convention

function Header() {
  const [{basket, user}, dispatch] = useStateValue(); //useState is a hook, the [] is the initial value
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user) {
      const fetchUserName = async () => {
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
          console.log("Fetched user documentsss:", userDoc.data());
          console.log("Fetched user name:", userDoc.data().name);
          setUserName(userDoc.data().name);
        } else {
          console.log("No document found for user UID:", user.uid);
        }
      };
      fetchUserName();
    } else {
      setUserName("");
    }
    console.log("user is", userName);
  }, [user, userName]);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/">
              {/* img */}
              <img className="logo__img" src={Logo} alt="PosterGenius" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/">
              <h4>PosterGenius</h4>
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/posters">Posters</Link>
          </li>
          <li className="nav__item">
            <Link to="/posterInfo/:id">PosterInfo</Link>
          </li>
        </ul>

        <form className="search">
          <input type="text" className="search__input" placeholder="Search" />
        </form>

        <div className="nav__list">
          <div>
            <Link to={!user && "/login2"}>
              <button onClick={handleAuthenticaton} className="login">
                {user ? `${userName} ` : "Guest "}
                {user ? "Sign Out" : "Sign In"}
              </button>
            </Link>
          </div>
          <div className="nav__item cart">
            <Link to="/checkout" className="cart__link">
              <img src={Cart} alt="PosterGenius" />
              <p>{(basket && basket.length) || 0}</p>
              {/* if basket is true, then return basket.length, else return 0, this is a ternary operator */}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
