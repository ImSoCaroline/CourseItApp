import React from 'react';

class InputMirror extends React.Component {
  constructor(props) {
    super(props)

    //inicializacion
    this.state = {
      inputValue1: '',
      inputValue2: '',
      showValues: false
    };
  }

  handleChange1(e) {
    // NO HACER ESTO
    // this.state.inputValue = e.target.value;
    // this.forceUpdate(e);

    //actualizacion
    this.setState({
      inputValue1: e.target.value
    });
  }

  handleChange2(e) {
    this.setState({
      inputValue2: e.target.value
    });
  }

  handleClick() {
    this.setState({
      showValues: (!this.state.showValues)
    })
  }

  render() {
    return (
      <>
        <input type="text" onChange={(e) => this.handleChange1(e)} />
        <input type="text" onChange={(e) => this.handleChange2(e)} />
        {/* lectura */}
        {this.state.showValues && (
          <>
            <p>{this.state.inputValue1}</p>
            <p>{this.state.inputValue2}</p>
          </>
        )}

        <button onClick={() => this.handleClick()}>Copiar</button>

      </>
    )
  }
}

export default InputMirror;