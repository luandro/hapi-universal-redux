import React from 'react';
import Radium from 'radium';

@Radium
export default class Couter extends React.Component {
  render() {
    let count = this.props.counter.toString();
    return (
      <div style={styles.base}>
        <span style={styles.count}>{count}</span>
        <div style={styles.inputContainer}>
          <button style={styles.button} onClick={this.props.plus}>+</button>
          <button style={styles.button} onClick={this.props.minus}>-</button>
        </div>
      </div>
    );
  }
}

const styles = {
  base: {
    paddingBottom: 25

  },
  count: {
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
