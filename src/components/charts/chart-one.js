// HighchartsComponent.js
import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighchartsOneComponent = ({ data }) => {
  useEffect(() => {
    // Create Highcharts configuration
    const options = {
      chart: {
        type: "column",
      },
      title: {
        text: "My Column Chart",
      },
      xAxis: {
        title: {
          text: "X-Axis Label",
        },
        categories: data.map((point) => point.x),
      },
      yAxis: {
        title: {
          text: "Y-Axis Label",
        },
      },
      series: [
        {
          name: "Y-Axis Data",
          data: data.map((point) => point.y),
        },
      ],
    };

    // Create Highcharts chart
    Highcharts.chart("chart-container", options);
  }, [data]);

  return (
    <div id="chart-container" style={{ width: "100%", height: "400px" }} />
  );
};

export default HighchartsOneComponent;
