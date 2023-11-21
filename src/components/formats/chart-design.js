import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ChartDesign() {
  //   const [isExpanded, setExpanded] = useState(false);
  //   const handleToggle = () => {
  //     setExpanded(!isExpanded);
  //   };

  return (
    <>
      <div className="">
        <Link to="/">
          <img
            src="/wealthtracker/images/charts.jpg"
            alt="sample"
            style={{ width: "95%" }}
          />
        </Link>
      </div>
    </>
  );
}

export default ChartDesign;
