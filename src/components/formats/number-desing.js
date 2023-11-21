import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NumbersInput() {
  //   const [isExpanded, setExpanded] = useState(false);
  //   const handleToggle = () => {
  //     setExpanded(!isExpanded);
  //   };
  const myStyle = {};

  return (
    <>
      <div className="">
        <Link to="/">
          <img
            src="/wealthtracker/images/numbers.jpg"
            alt="sample"
            style={{ width: "95%" }}
          />
        </Link>
      </div>
    </>
  );
}

export default NumbersInput;
