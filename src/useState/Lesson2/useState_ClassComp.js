import React from "react";

function FormField({ label, type = "text", name, value, onChange }) {
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
export class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  clearState = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <>
        <form>
          <FormField
            label="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={(firstName) => this.setState({ firstName })}
          />

          <FormField
            label="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={(lastName) => this.setState({ lastName })}
          />
          <FormField
            label="Age"
            type="number"
            name="age"
            value={this.state.age}
            onChange={(ageString) => {
              const age = ageString ? parseInt(ageString) : "";
              this.setState({ age });
            }}
          />
        </form>
        <div>
          <button onClick={this.clearState}>CLEAR</button>
        </div>
        <div>
          Ferst Name: {this.state.firstName} <br />
          Last Name: {this.state.lastName} <br />
          Age: {this.state.age} <br />
        </div>
      </>
    );
  }
}
