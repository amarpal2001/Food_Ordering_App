import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus()

  return (
    <div className="flex justify-between h-20 bg-green-100 shadow-lg">
      <div className="logoContainer">
        <img className="w-22 h-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-4">
          <li className="px-4"> {onlineStatus ? "✅": "🔴"}</li>
          <li className="px-4"> <Link to='/'>Home</Link></li>
          <li className="px-4"> <Link to='/About'>About Us</Link></li>
          <li className="px-4"> <Link to='/Contact'>Contact Us</Link></li>
          <li className="px-4"> <Link to='/Grocery'>Grocery</Link></li>
          <li className="px-4">Cart</li>
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
