import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  const [isExpanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <header className={`app-header ${isExpanded ? "expanded" : ""}`}>
        <div className="logo-container">
          {/* <div className="menu-icon" onClick={handleToggle}>
            ☰
          </div> */}
          <div className="logo" onClick={handleToggle}>
            <Link to="/">
              <img src="/wealthtracker/images/wtlogo.png" alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="left-menu"></div>
      </header>
    </div>
  );
}

export default Header;
