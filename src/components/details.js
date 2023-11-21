import React, { useEffect, useState } from "react";
import BwTabs from "./tabs";
import HighchartsTwoComponent from "./charts/chart-two";

function Detail() {
  return (
    <div>
      <h1>Detail Page</h1>
      <div className="row">
        <div className="col-md-12">
          <BwTabs />
        </div>
        {/* <div className="col-md-6">
          <HighchartsTwoComponent></HighchartsTwoComponent>
        </div> */}
      </div>
    </div>
  );
}

export default Detail;
