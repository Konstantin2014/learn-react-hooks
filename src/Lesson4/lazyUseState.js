import { useState } from "react";
// Инициализация useState с помощью функций. она вызывается один раз

// создаем ф-цию массив которой будет хранить несколько степеней числа
// и мы хотим вызывать е как можно реже
function someHaevyFunc(maxNumber, maxPow) {
  const data = [];
  for (let i = 0; i < maxNumber; i++) {
    const record = {};
    for (let pow = 1; pow <= maxPow; pow++) {
      record[pow] = Math.pow(i, pow);
    }
    data.push(record);
  }
  return data;
}
// пишем компонент для каждой строки таблицы
function Row({ record }) {
  return (
    <tr>
      {Object.values(record)
        .sort((a, b) => a - b) // сортируем по возрастанию
        .map((value, i) => (
          // и для каждого значения выводим ячейку td
          <td key={i}>{value}</td>
        ))}
    </tr>
  );
}

// хедер в таблице тоже будет рендерится динамически в зависимости
// от количества столбцов
function HeaderRow({ maxPow }) {
  const cells = [];
  for (let pow = 1; pow <= maxPow; pow++) {
    cells.push(
      <th style={{ minWidth: 100 }} key={pow}>
        ^{pow}
      </th>
    );
  }
  return <tr>{cells}</tr>;
}

const MAX_NUMBER = 30;
const MAX_POW = 5;

// главный компонент, который рендерит таблицу со всеми числами
export function Example() {
  const [data, setData] = useState(() => {
    console.log("useState initialization"); // отображается при вызове someHaevyFunc
    return someHaevyFunc(MAX_NUMBER, MAX_POW); // ф-ция инициализации и отработает только один раз
  });

  //способ искуственно ререндерить компонент не изменяя данных
  const [trigger, setTrigger] = useState();
  const rerender = () => setTrigger({}); //каждый раз привызове ф-ции она засетит новый обьект
  //что вызовет новый ререндер, т к обьект новый и не равен предыдущемуБ хоть они и пустые, но ссылки у них разные
  //этот прием удобен при обновлении по событию, а события нет
  const removeFerst = () => {
    // удаляем первый элемент массива
    setData((prevValue) => {
      const [, ...rest] = prevValue;
      return rest;
    });
  };

  console.log("Exemple has been rendered"); // отображается на каждом рендере
  return (
    <>
      <p>
        <button onClick={removeFerst}>REMOVE FERST</button>
        <button onClick={rerender}>RERENDER</button>
      </p>
      <table>
        <thead>
          <HeaderRow maxPow={MAX_POW} />
        </thead>
        <tbody>
          {data.map((record) => (
            <Row key={record["1"]} record={record} />
          ))}
        </tbody>
      </table>
    </>
  );
}
