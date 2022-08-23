// Сравниваем использования внутреннего состояния компонета для функциональных копонентов
// и компонетов кассов
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
const DEFAULT_AGE = 21;

export function FormExemple() {
  const [firstName, setFerstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(DEFAULT_AGE);

  const clear = () => {
    setFerstName("");
    setLastName("");
    setAge(DEFAULT_AGE);
  };

  return (
    <>
      <form>
        <FormField
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={(newValue) => setFerstName(newValue)}
        />

        <FormField
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={(newValue) => setLastName(newValue)}
        />
        <FormField
          label="Age"
          type="number"
          name="age"
          value={age}
          onChange={(newValue) => {
            setAge(newValue ? parseInt(newValue) : 0);
          }}
        />
      </form>
      <div>
        <button onClick={clear}>CLEAR</button>
      </div>
      <div>
        Ferst Name: {firstName} <br />
        Last Name: {lastName} <br />
        Age: {age} <br />
      </div>
    </>
  );
}

// рефакторим код и дробим на более мелкие компоненты

// export function FormExemple() {
//   const [firstName, setFerstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [age, setAge] = useState(21);

//   return (
//     <form>
//       <label htmlfor="firstName">Firt Name</label>
//       <input
//         type="text"
//         name="firstName"
//         value={firstName}
//         onChange={(event) => setFerstName(event.target.value)}
//       />
//       <label htmlfor="lastName">Last Name</label>
//       <input
//         type="text"
//         name="lastName"
//         value={lastName}
//         onChange={(event) => setLastName(event.target.value)}
//       />
//       <label htmlfor="age">Age</label>
//       <input
//         type="number"
//         name="age"
//         value={age}
//         onChange={(event) => {
//           const ageString = event.target.value; // это string
//           setAge(ageString ? parseInt(ageString) : 0); //поэтому распарсиваем его
//         }}
//       />
//     </form>
//   );
// }
