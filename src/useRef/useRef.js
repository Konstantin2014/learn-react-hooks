import { useEffect, useState, useRef } from "react";
// иногда возникает наобходимость получить доступ к дочерним компонентам в императивном стиле(т е
// вызвать метод какого нибудь компонента напрямую). useRef возвращает изменяемый Ref-обьект
// (контейнер) который будет сохраняться на протяжении жизни компонента.

// используем useRef чтобы сфокусировать input по нажатию кнопки
export function Example() {
  const refContainer = useRef();

  const toggledRef = useRef(false);
  const [toggleState, setToggleState] = useState(false);

  const focusInput = () => {
    refContainer.current?.focus(); // refContainer имеет current через которое мы получаем доступ к текущему контенту
    //  этого контейнера и если current не null underfined то вызываем focus
  };

  //добавим функционал и input будет терять фокус при введении определенного текста
  const onChange = (event) => {
    const text = event.target.value; // вытаскиваем из event текст
    if (text === "blur") {
      refContainer.current?.blur(); // обращаемся к свойству current из refContainer и вызовем метод blur
    }
  };
  // по сути useRef это контейнер для изменяемого значения доступ к которому можно получить
  // через его свойство current и хранить в нем можно что угодно. Разница с useState в том что useRef
  // не вызывает ререндер компонента
  const changeRef = () => {
    toggledRef.current = !toggledRef.current;
    console.log(`toggled to: ${toggledRef.current}`);
  };

  const changeState = () => {
    setToggleState((prev) => !prev);
    console.log(
      `toggledRef: ${toggledRef.current} toggleState: ${toggleState}`
    );
  };

  return (
    <div>
      <input ref={refContainer} onChange={onChange} />
      <p>
        <button onClick={focusInput}>FOCUS</button>
      </p>
      <p>
        <button onClick={changeRef}>TOGGLED REF</button>
        <button onClick={changeState}>TOGGLED STATE</button>
      </p>
    </div>
  );
}
