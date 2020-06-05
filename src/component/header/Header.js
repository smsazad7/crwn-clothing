import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../assed/original.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const Header = ({ currenUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currenUser ? (
          <Link className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
