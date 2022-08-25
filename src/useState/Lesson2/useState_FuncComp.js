import { useState } from "react";

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

// все поля обьединены в один компонент initialState сетим мы его через setState
const initialState = {
  firstName: "",
  lastName: "",
  age: 21,
};
export function FormExemple() {
  const [state, setState] = useState(initialState);

  const clear = () => {
    setState(initialState);
  };

  return (
    <>
      <form>
        <FormField
          label="First Name"
          name="firstName"
          value={state.firstName}
          onChange={(newValue) =>
            setState((prevState) => {
              return { ...prevState, firstName: newValue };
            })
          }
        />

        <FormField
          label="Last Name"
          name="lastName"
          value={state.lastName}
          onChange={(newValue) =>
            setState((prevState) => {
              return { ...prevState, lastName: newValue };
            })
          }
        />
        <FormField
          label="Age"
          type="number"
          name="age"
          value={state.age}
          onChange={(newValue) =>
            setState((prevState) => {
              return {
                ...prevState,
                age: newValue ? parseInt(newValue) : 0,
              };
            })
          }
        />
      </form>
      <div>
        <button onClick={clear}>CLEAR</button>
      </div>
      <div>
        Ferst Name: {state.firstName} <br />
        Last Name: {state.lastName} <br />
        Age: {state.age} <br />
      </div>
    </>
  );
}
