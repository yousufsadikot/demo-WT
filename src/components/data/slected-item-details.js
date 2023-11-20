import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HighchartsOneComponent from "../charts/chart-one";
import { link } from "react-router-dom";

const SelectedItemDetails = ({ selectedItem }) => {
  // Example of chartData structure
  const chartItems = {
    id: selectedItem.id,
    title: "Sample Item",
    chartData: [
      { x: 1, y: 5 },
      { x: 2, y: 10 },
      { x: 3, y: 8 },
      // Add more data points as needed
    ],
  };

  const str = selectedItem.clientName;
  const firstLetter = str.charAt(0);
  const bgcolor = { backgroundColor: selectedItem.bgColor };

  return (
    <div className="side-pannel-open">
      <div className="d-flex justify-content-between w-100">
        <div>
          <h4>
            <strong>Client Profile</strong>
          </h4>
        </div>

        <div>
          <Link to={`/detail/${selectedItem.id}`}>
            <button className="btn btn-sm btn-primary">Go to Details</button>
          </Link>
        </div>
      </div>

      {selectedItem && (
        <div>
          <p className="d-flex">
            <div className="i-circle " style={bgcolor}>
              {firstLetter}
            </div>
            <div className="">
              {selectedItem.clientName}
              <br />
              <span className="service-txt">
                Service: {selectedItem.servcie}
              </span>
            </div>
            <br />
          </p>

          <p></p>
          {/* Add additional item details as needed */}
        </div>
      )}
      <div className="high-chart-container">
        <HighchartsOneComponent data={chartItems.chartData} />
      </div>
      <div className="summery-text">{selectedItem.Summery}</div>
    </div>
  );
};

export default SelectedItemDetails;
