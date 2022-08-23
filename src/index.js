import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "./HelloWorld";

const red = "#f00";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelloWorld color={red} /> /* вычисляемое значение*/
    <HelloWorld color="#ff0" /> /* стринговый литерал*/
  </React.StrictMode>
);
