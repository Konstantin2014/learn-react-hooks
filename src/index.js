import React from "react";
import ReactDOM from "react-dom/client";
// import { Clicker } from "./Lesson1/useState";
// import { FormExemple } from "./Lesson2/useState";
// import { FormExemple } from "./Lesson2/useStateFC";
import { ClassExample } from "./Lesson2/useState_ClassComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Clicker/> */}
    {/* <FormExemple /> */}
    <ClassExample />
  </React.StrictMode>
);
