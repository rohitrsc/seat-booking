
import React, { lazy, Suspense } from "react";
import "./style/style.css";

const SeatsChart = lazy(() => import("./components/SeatsChart"));

const Apps = () => {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loading-container">
            <div className="chart-placeholder"></div>
            <div className="loading-text">Loading...</div>
          </div>
        }
      > <SeatsChart />
      </Suspense>
    </div>
  );
};

export default App;
