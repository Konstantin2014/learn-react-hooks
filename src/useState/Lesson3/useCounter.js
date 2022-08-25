import { useState } from "react";
// пользовательские хуки  - это обычная js-функция, которая содержит в себе повторно используемую логику компонента
// в этой ф-ции можно использовать все стандартные хуки и другие пользовательские хуки,
// комбинируя и использця композицию можно строить сложные цепочки из бизнесс логики
function useCounter(initialValue = 0, delta = 1) {
  const [count, setCount] = useState(initialValue);

  const incriment = () => {
    setCount((prevValue) => prevValue + delta);
  };
  const decriment = () => {
    setCount((prevValue) => prevValue - delta);
  };
  return [count, incriment, decriment];
}
// для создания пользовательского хука мы использовали useState
// и два сеттера

//  пример использования хука двумя разными счетчиками которые выглядят
// по разному но используют один и тот же хук
export function YearsCounter({ initialValue }) {
  const [count, inc, dec] = useCounter(initialValue, 1);
  return (
    <div>
      <p>Year:</p>
      <div>
        <button onClick={inc}>{">>"}</button>
        <span style={{ margin: 5 }}>{count}</span>
        <button onClick={dec}>{"<<"}</button>
      </div>
    </div>
  );
}

export function DecadesCounter({ initialValue }) {
  const [count, inc] = useCounter(initialValue, 10);

  return (
    <p>
      Decade: <span onClick={inc}>{count}'s</span>
    </p>
  );
}
