import { useState } from "react";
import { useEffect } from "react";
// чистая ф-ция это предсказуемая ф-ция и при одинаковых входных пареметрах
// результат одинаков
// все что изменяет результат ф-ции с течением времени это side effect
// side effect это взаимодействие ф-ции с внешним контекстом по отношению к
// этой ф-ции (например DOM, REST API-запрос и т п)

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

// ф-ция имитирующая отправку сообщений на сервер
// ф-ция вернет нам Promise, который через 1 сек resolve-ится
function updateClicksCount(clicksCount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        seccess: true,
        clicksCount,
      });
    }, 1000);
  });
}

export function Counter() {
  const [count, incriment] = useCounter(0, 1);

  useEffect(() => {
    //логика обновления поля title документа
    document.title = `Count: ${count}`;
  }, [count]); // список зависимостей можно сказать что это список
  //   входящих переметров в callback хотя передается он не явно, т е при каждом
  //   рендере react будет сравнивать значения в этом массиве с предыдущими значениями
  //   важно с списке зависимостей указать все значения которые используются в callback

  //   useEffect(() => {
  //     //логика отправки нового значения на сервер
  //     const update = async () => {
  //       const response = await updateClicksCount(count);
  //       console.log(response);
  //     };
  //     update();
  //   }, [count]);

  //логика очистки, можем отменить подписку на обновления и т д
  useEffect(() => {
    console.log(`>> running effect ${count}`); //текущее значение count
    return () => {
      // cleanup function
      console.log(`<< cleaning up ${count}`);
    };
  }, [count]); // сначала вызывается cleaning up а потом running effect

  // если список зависимостей будет пустой то эффект вызовется один раз после перврго рендера
  useEffect(() => {
    console.log("component did mount");
    return () => {
      console.log("component will unmount");
    };
  }, []); // этот эффект выполняется после рендера

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={incriment}>+1</button>
    </div>
  );
}
