// пример из прошлого урока с использованием формы. создаем аналог setState
// из класических компонентов и создатим пользовательский хук useMargeState для хранения состояния
// который при update будет накладывать изменения поверх старой версии, а не затирать
// предыдущие
import { useState } from "react";

function useMargeState(initialValue) {
  const [state, setState] = useState(initialValue);

  const mergeState = (changes) => {
    setState((prevState) => {
      return {
        ...prevState,
        ...changes,
      };
    });
  };
  return [state, mergeState];
}

function FormField(props) {
  const { label, type = "text", name, value, onChange } = props;
  return (
    <div>
      <label htmlfor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

const initialState = {
  firstName: "",
  lastName: "",
  age: 21,
};
export function FormExemple() {
  const [data, setData] = useMargeState(initialState);

  const clear = () => {
    setData(initialState);
  };

  return (
    <>
      <form>
        <FormField
          label="First Name"
          name="firstName"
          value={data.firstName}
          onChange={(firstName) => setData({ firstName })}
        />
        <FormField
          label="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={(lastName) => setData({ lastName })}
        />
        <FormField
          label="Age"
          type="number"
          name="age"
          value={data.age}
          onChange={(age) => setData({ age: age ? parseInt(age) : "" })}
        />
      </form>
      <div>
        <button onClick={clear}>CLEAR</button>
      </div>
      <div>
        Ferst Name: {data.firstName} <br />
        Last Name: {data.lastName} <br />
        Age: {data.age} <br />
      </div>
    </>
  );
}
// с помощью кастомного хука мы добились поведения аналогично
// компонентам класса
