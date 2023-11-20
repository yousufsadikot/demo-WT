import React, { useEffect, useState } from "react";
import logo from "../images/wtlogo.png";

function Header() {
  const [isExpanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <header className={`app-header ${isExpanded ? "expanded" : ""}`}>
        <div className="logo-container">
          <div className="menu-icon" onClick={handleToggle}>
            ☰
          </div>
          <div className="logo" onClick={handleToggle}>
            <img src="{logo}" alt="Logo" />
            Logo
          </div>
        </div>
        <div className="left-menu"></div>
      </header>
    </div>
  );
}

export default Header;
