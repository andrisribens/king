import React from "react";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import logo from "../images/ball.svg";

function Header() {
  return (
    <header>
    <div className="box-centered-content">
      <img src={logo} alt="Beach volley ball" height="30px" width="30px"/>
    </div>
    <div>
        <h1>King of The Beach</h1>
        <p>Tournament Schedule & Scores</p>
    </div>  
    </header>
  );
}

export default Header;
