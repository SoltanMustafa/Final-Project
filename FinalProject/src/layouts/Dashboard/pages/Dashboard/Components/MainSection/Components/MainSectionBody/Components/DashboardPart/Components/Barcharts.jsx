import React, { useState } from "react";

export default function Barcharts() {
  const [lineGraph, setLineGraph] = useState(1);
  const handleLineGraph = (index) => {
    setLineGraph(index);
  };

  return (
    <>
      <div className="barcharts">
        <div className="chart-holder">
          <p className="chart-title">Weekly Sales</p>
          <div className="line-graph-type">
            <ul className="flex flex-wrap">
              <li className="mr-2">
                <button
                  type="button"
                  className={`${lineGraph === 1 ? "text-green" : ""}`}
                  onClick={() => {
                    handleLineGraph(1);
                  }}
                >
                  Sales
                </button>
              </li>
              <li className="mr-2">
                <button
                  type="button"
                  className={`${lineGraph === 2 ? "text-orange" : ""}`}
                  onClick={() => {
                    handleLineGraph(2);
                  }}
                >
                  Orders
                </button>
              </li>
            </ul>
          </div>
          <div className="line-graph-holder">
            <img
              src={lineGraph === 1 ? "/green-graph.png" : "/orange-graph.png"}
              alt="graph"
            />
          </div>
        </div>
        <div className="chart-holder">
          <p className="chart-title">Best Selling Products</p>
          <div className="pie-chart-holder">
            <img src="/pie-chart.png" alt="chart" />
          </div>
        </div>
      </div>
    </>
  );
}
