import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function TabelDesign() {
  //   const [isExpanded, setExpanded] = useState(false);
  //   const handleToggle = () => {
  //     setExpanded(!isExpanded);
  //   };

  return (
    <>
      <div className="">
        <Link to="/">
          <img src="/wealthtracker/images/table.jpg" alt="sample" />
        </Link>
      </div>
    </>
  );
}

export default TabelDesign;
