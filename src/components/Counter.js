import React from 'react';
import Radium from 'radium';

@Radium
export default class Counter extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    plus: React.PropTypes.func.isRequired,
    minus: React.PropTypes.func.isRequired
  }

  render() {
    let count = this.props.counter.toString();
    const {plus, minus} = this.props;
    const {base, counter, inputContainer, button} = styles;

    return (
      <div style={base}>
        <span style={counter}>{count}</span>
        <div style={inputContainer}>
          <button style={button} onClick={plus}>+</button>
          <button style={button} onClick={minus}>-</button>
        </div>
      </div>
    );
  }
}

const styles = {
  base: {
    paddingBottom: 25

  },
  counter: {
    fontSize: '5em',
    color: 'white',
    marginLeft: 20
  },
  inputContainer: {
    height: 80,
    width: 40,
    float: 'left',
    marginTop: 15
  },
  button: {
    height: 38,
    width: 40,
    borderRadius: 0,
    border: '1px #0df solid',
    padding: '10px',
    background: 'none',
    color: 'white',
    margin: '0 5px',
    float: 'left',

  }
}
