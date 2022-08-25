// хранение в useState ф-ции. В JS-ф-ции это сущности первого порядкаю
// это значит что ф-циями можно делать все тоже что и с остальными типами данных

import { useState } from "react";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multyplay = (a, b) => a * b;
const divide = (a, b) => a / b;

// событие onChange возвращает строковое значение и нам нужно его распарсить
const onChange = (setter) => {
  // ф-ция вернет обработчик
  return (event) => {
    const { value } = event.target;
    setter(value ? parseFloat(value) : 0);
  };
};

// создаем компонент
export function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [action, setAction] = useState(() => add);
  const [sign, setSign] = useState("+");

  const applyAction = (fn, fnSign) => {
    return () => {
      setAction(() => fn);
      setSign(fnSign);
    };
  };

  return (
    <>
      <p>
        <button onClick={applyAction(add, "+")}>ADD</button>
        <button onClick={applyAction(subtract, "-")}>SUBTRACT</button>
        <button onClick={applyAction(multyplay, "*")}>MULTYPLAY</button>
        <button onClick={applyAction(divide, "/")}>DIVIDE</button>
      </p>
      <p>
        <input type="number" value={a} onChange={onChange(setA)} />
        <span> {sign} </span>
        <input type="number" value={b} onChange={onChange(setB)} />
        <span> = {action ? action(a, b) : ""}</span>
      </p>
    </>
  );
}
