import React, { useState } from "react";
import Plot from "react-plotly.js";

function Chart(props) {
  return (
    <Plot
      data={[
        {
          x: [
            new Date(2021, 9, 28, 16, 30),
            new Date(2021, 9, 28, 16, 38),
            new Date(2021, 9, 28, 17, 40),
            new Date(2021, 9, 28, 17, 58),
          ],
          y: [1, 1, 1, 1],
          type: "scatter",
          text: ['Batch start', 'Departure', 'Arrival', 'Pour end'],
          mode: "lines+markers",
          marker: { color: "rgb(219,226,0)" },
        },
        {
          x: [
            new Date(2021, 9, 28, 16, 20),
            new Date(2021, 9, 28, 16, 28),
            new Date(2021, 9, 28, 17, 15),
            new Date(2021, 9, 28, 17, 33),
          ],
          y: [2, 2, 2, 2],
          type: "scatter",
          text: ['Batch start', 'Departure', 'Arrival', 'Pour end'],
          mode: "lines+markers",
          marker: { color: "green" },
        }
      ]}
      layout={{ width: 700, height: 320, title: "Departure variants", showlegend: false, yaxis: {tick0: 0, dtick: 1,} }}
      config={{ displayModeBar: false, scrollZoom: false }}
    />
  );
}

export default Chart;
