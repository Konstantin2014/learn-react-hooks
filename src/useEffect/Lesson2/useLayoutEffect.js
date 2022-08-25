//реализуем управление персонажем в игре
import { useEffect, useLayoutEffect, useState, useMemo } from "react";

function useCharacterPosition(step) {
  //хук прослушивающий нажатие на клавиатуру и возвращающий позицию персонажа
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // eslint-disable-next-line default-case
      switch (event.key) {
        case "ArrowLeft":
          setLeft((prev) => prev - step);
          break;
        case "ArrowRight":
          setLeft((prev) => prev + step);
          break;
        case "ArrowUp":
          setTop((prev) => prev - step);
          break;
        case "ArrowDown":
          setTop((prev) => prev + step);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    //прослушиваем событие нажатия кнопки на клавиатуре
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }; //отписываемся
  }, [step]);

  return [left, top];
}

const initialStyle = {
  backgroundColor: "#F00",
  position: "absolute",
  width: 100,
  height: 100,
  left: 0,
  top: 0,
};
function generateDummies(count) {
  // ф-ция генерит массив элементов (для нагрузки)
  const dummies = [];
  for (let i = 0; i < count; i++) {
    dummies.push(<div key={i}>i === {i}</div>);
  }
  return dummies;
}

export function Example() {
  const [left, top] = useCharacterPosition(50);
  // const [style, setStyle] = useState(initialStyle);

  // useLayoutEffect(() => {
  //   // для устрананеия неконсистентного состояния (useLayoutEffect устраняет
  //   // торможение по сравнению с useEffect)
  //   setStyle((prev) => {
  //     return {
  //       ...prev,
  //       left,
  //       top,
  //     };
  //   });
  // }, [left, top]);

  // в данной ситуации нам подходит useMemoю она взвращает мемоизированное значение
  // т е значение ссылка на которую сохранится между рендерами. Мемоизация запоминает
  // сложные вычисления сохраняя ресурсы программы
  const style = useMemo(() => {
    return { ...initialStyle, left, top };
  }, [left, top]);

  return (
    <>
      <h2>
        [{left}, {top}]
      </h2>
      <div style={style} />
      {generateDummies(10000)}
    </>
  );
}
