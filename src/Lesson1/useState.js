// хук для хранения внутреннего состояния
import { useState } from "react";

// функция Clicker описывает инструкции для отрисовки компонента
export function Clicker() {
  const [click, setClick] = useState(0); // названия click, setClick могут быть любыми
  const [showClick, setShowClick] = useState(false);

  const onClick = () => {
    setClick(click + 1);
  };

  const toggleShowClick = () => {
    setShowClick((prev) => !prev);
  };

  const clickText = showClick ? `(${click})` : "";

  return (
    <div>
      <button onClick={onClick}>Click me! {clickText}</button>
      <button onClick={toggleShowClick}>Toggle show click</button>
    </div>
  );
}
// хуки это мостик между функцией компонента и конкретным его экземпляром
// хуки можно вызывать только из функциональных компонентов (в компонетах класса они не работают)
// хуки можно вызывать из других кастомных хуков
// хуки вызываются на верхнем уровне функции (нельзя вызывать в логике, циклах или вложенных функциях)
