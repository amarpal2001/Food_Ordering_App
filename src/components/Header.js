import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> {onlineStatus ? "✅": "🔴"}</li>
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/About'>About Us</Link></li>
          <li> <Link to='/Contact'>Contact Us</Link></li>
          <li>Card</li>
          <button
            className="login"
            onClick={() => {
             btnName ==="Login"? setBtnName( "Logout"): setBtnName('Login')
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
