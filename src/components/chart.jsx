import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

function Chart(props) {
  return (
    <Plot
      data={[
        {
          x: [
            new Date(props.data.data[0]),
        new Date(props.data.data[1]),
        new Date(props.data.data[2]),
        new Date(props.data.data[3])
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
