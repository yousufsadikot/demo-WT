import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HighchartsOneComponent from "../charts/chart-one";

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
  return (
    <div className="side-panel">
      <h3>Item Details</h3>
      {selectedItem && (
        <div>
          <p>Client: {selectedItem.clientName}</p>
          <p>Service: {selectedItem.clientName}</p>
          {/* Add additional item details as needed */}
        </div>
      )}
      <HighchartsOneComponent data={chartItems.chartData} />
      <div>{selectedItem.Summery}</div>
      <button>Go to Details</button>
    </div>
  );
};

export default SelectedItemDetails;
