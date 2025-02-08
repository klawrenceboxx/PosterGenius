import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "./firebase";
import {useStateValue} from "./StateProvider";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [{basket, user}, dispatch] = useStateValue();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (user) {
      const fetchUserName = async () => {
        const userDoc = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          setUserName(docSnap.data().name);
        }
      };
      fetchUserName();
    }
  }, [user]);

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  };

  return (
    <header className="flex items-center justify-between bg-gray-800 text-white px-4 py-2">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/DesignAssets/images/PosterGeniusV2.png"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <span className="text-xl font-bold">PosterGenius</span>
      </Link>

      {/* Navigation */}
      <nav className="flex space-x-6">
        <Link to="/posters" className="hover:underline">
          Posters
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </nav>

      {/* User and Cart Section */}
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-2">
            <span className="text-sm">Hello, {userName || "User"}</span>
            <button
              onClick={handleSignOut}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
          >
            Sign In
          </Link>
        )}
        <Link to="/checkout" className="relative">
          <img
            src="/DesignAssets/images/Cart.png"
            alt="Cart"
            width={30}
            height={30}
            className="object-contain"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
            {basket?.length || 0}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
