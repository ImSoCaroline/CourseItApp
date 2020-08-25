import React from 'react';

class Sum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      sum: 0
    }
  }

  handlechange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleClick() {
    const { firstNumber, secondNumber } = this.state;

    this.setState({
      sum: +firstNumber + +secondNumber
    });
  }

  render() {
    const { sum } = this.state;
    return (
      <>
        <input name='firstNumber' type='text' onChange={(e) => this.handlechange(e)}></input>
        <input name='secondNumber' type='text' onChange={(e) => this.handlechange(e)}></input>
        <button onClick={() => this.handleClick()}>Sumar</button>
        <p>La suma es: {sum}</p>
      </>
    )
  }
}

export default Sum