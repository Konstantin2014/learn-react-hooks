import React from "react";
import ReactDOM from "react-dom/client";
// import { Clicker } from "./Lesson1/useState";
// import { FormExemple } from "./Lesson2/useState";
// import { FormExemple } from "./Lesson2/useStateFC";
// import { ClassExample } from "./Lesson2/useState_ClassComp";
// import { YearsCounter, DecadesCounter } from "./Lesson3/useCounter";
// import { FormExemple } from "./Lesson3/useState_FuncComp";
import { Example } from "./Lesson4/lazyUseState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Clicker/> */}
    {/* <FormExemple /> */}
    {/* <ClassExample /> */}
    {/* <YearsCounter initialValue={1970} />
    <DecadesCounter initialValue={1970} />
    <FormExemple /> */}
    <Example />
  </React.StrictMode>
);
