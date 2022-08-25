import React from "react";
import ReactDOM from "react-dom/client";
// import { Clicker } from "./useState/Lesson1/useState";
// import { FormExemple } from "./useState/Lesson2/useState_hook";
// import { FormExemple } from "./useState/Lesson2/useState_FuncComp";
// import { ClassExample } from "./useState/Lesson2/useState_ClassComp";
// import { YearsCounter, DecadesCounter } from "./useState/Lesson3/useCounter";
// import { FormExemple } from "./useState/Lesson3/useState_FuncComp";
// import { Example } from "./useState/Lesson4/lazyUseState";
// import { Calculator } from "./useState/Lesson5/calculator";
// import { Counter } from "./useEffect/Lesson1/useEffect";
import { Example } from "./useEffect/Lesson2/useLayoutEffect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Clicker/> */}
    {/* <FormExemple /> */}
    {/* <ClassExample /> */}
    {/* <YearsCounter initialValue={1970} />
    <DecadesCounter initialValue={1970} />
    <FormExemple /> */}
    {/* <Example /> */}
    {/* <Calculator /> */}
    {/* <Counter /> */}
    <Example />
  </React.StrictMode>
);
