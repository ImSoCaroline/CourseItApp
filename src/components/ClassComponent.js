import React from "react";

class ClassComponent extends React.Component {
  handleChange() {
    console.log("Cambio el input ClassComponent");
  }

  render() {
    return (
      <>
        <h1>Hola PT</h1>
        <h2>Curso de Front-End avanzado</h2>
        <input onChange={this.handleChange} />
      </>
    )
  }
}

export default ClassComponent;
