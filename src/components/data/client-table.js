import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SelectedItemDetails from "./slected-item-details";

function ClientTable() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./data/client.json");
        console.log("This is data:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container mt-5">
      <h2>Client Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Service</th>
            <th>Lead Advisor</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr
                key={item.id}
                onClick={() => handleRowClick(item)}
                style={{ cursor: "pointer" }}
              >
                <td>{item.clientName}</td>
                <td>{item.servcie}</td>
                <td>{item.leadAdivsor}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {selectedItem && <SelectedItemDetails selectedItem={selectedItem} />}
    </div>
  );
}

export default ClientTable;
