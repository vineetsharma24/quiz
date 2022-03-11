import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Home from "./Home";

function Nav() {
  return (
    <div>
      <div>
        <header className="navbar">
          <div className="navbar__title navbar__item">MERN</div>

          <Link to="/quiz">
            <div className="navbar__item">Quiz</div>
          </Link>
          <Link to="/contact">
            <div className="navbar__item">Contact</div>
          </Link>
        </header>
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default Nav;
