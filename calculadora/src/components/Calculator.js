import React from 'react';
import { connect } from 'react-redux';
import { add, subtract, multiply, divide, clear, updateDisplay } from '../actions/calculatorActions';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: '',
      pendingOperation: null,
    };
  }

  handleButtonClick = (value) => {
    if (value === '=' && this.state.pendingOperation && this.state.firstNumber) {
      // Realiza a operação pendente e atualiza o visor
      const result = this.performOperation();
      this.props.updateDisplay(result);
      this.setState({
        currentNumber: result,
        pendingOperation: null,
        firstNumber: null,
      });
    } else if ('0123456789'.includes(value)) {
      // É um número, concatena ao número atual
      const newNumber = this.state.currentNumber + value;
      this.setState({ currentNumber: newNumber });
      this.props.updateDisplay(newNumber);
    } else if ('+-*/'.includes(value)) {
      if (this.state.currentNumber !== '') {
        // É um operador e há um número atual, armazene-o como o primeiro número
        this.setState({
          firstNumber: this.state.currentNumber,
          currentNumber: '',
          pendingOperation: value,
        });
      }
    } else if (value === 'C') {
      // Limpa o visor e reseta o estado
      this.setState({
        currentNumber: '',
        firstNumber: '',
        pendingOperation: null,
      });
      this.props.updateDisplay('0');
    }
  }

  performOperation = () => {
    const { firstNumber, currentNumber, pendingOperation } = this.state;
    const firstValue = parseFloat(firstNumber);
    const secondValue = parseFloat(currentNumber);
  
    switch (pendingOperation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        if (secondValue === 0) {
          return 'Error'; // Divisão por zero
        }
        return firstValue / secondValue;
      default:
        return firstValue; // Sem operação pendente
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.props.displayValue}</div>
        <div className="buttons">
          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
          <button onClick={() => this.handleButtonClick('=')}>=</button>
          <button onClick={() => this.handleButtonClick('C')}>C</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  displayValue: state.displayValue,
});

const mapDispatchToProps = {
  add,
  subtract,
  multiply,
  divide,
  clear,
  updateDisplay,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
