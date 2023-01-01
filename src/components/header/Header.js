import React from "react";
import "./Header.css";

// ----------------------------------------------------------------------
//                             Logo
// ----------------------------------------------------------------------
export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png"></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://th.bing.com/th/id/OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
        </a>
      </div>
    </header>
  );
};
