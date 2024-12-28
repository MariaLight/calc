
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [lastClicked, setLastClicked] = useState('');

  const getNumber = (num) => {

    if (operator) {
      setOperand2(operand2 + num)
    } else {
      if (lastClicked === '=') {
        setOperand1(num);
        setLastClicked('');
      } else {
        setOperand1(operand1 + num)
      }
    }
  }
  const plus = () => {
    setOperator('+');
    setLastClicked('+');
  }
  const minus = () => {
    setOperator('-');
    setLastClicked('-');
  }
  const getResult = () => {
    if (operator === '+') {
      setOperand1(String(Number(operand1) + Number(operand2)));
    } else if (operator === '-') {
      setOperand1(String(Number(operand1) - Number(operand2)));
    }
    setOperand2('');
    setOperator('');
    setLastClicked('=');
  }
  const reset = () => {
    setOperand1('');
    setOperand2('');
    setOperator('');
    setLastClicked('');

  }

  const buttons = [
    {
      id: 0,
      value: '0',
      callback: getNumber
    },
    {
      id: 1,
      value: '1',
      callback: getNumber
    },
    {
      id: 2,
      value: '2',
      callback: getNumber
    },
    {
      id: 3,
      value: '3',
      callback: getNumber
    },
    {
      id: 4,
      value: '4',
      callback: getNumber
    },
    {
      id: 5,
      value: '5',
      callback: getNumber
    },
    {
      id: 6,
      value: '6',
      callback: getNumber
    },
    {
      id: 7,
      value: '7',
      callback: getNumber
    },
    {
      id: 8,
      value: '8',
      callback: getNumber
    },
    {
      id: 9,
      value: '9',
      callback: getNumber
    },
    {
      id: 10,
      value: '+',
      callback: plus
    },
    {
      id: 11,
      value: '-',
      callback: minus
    },
    {
      id: 12,
      value: '=',
      callback: getResult
    },
    {
      id: 13,
      value: 'C',
      callback: reset
    },
  ];


  return (
    <div className={styles.app}>
      <div className={styles.calculatorInner}>
        <div className={styles.calculatorDisplay}>
          {operand1 ? operand1 + operator + operand2 : '0'}
        </div>
        <div className={styles.calculatorButtonsList}>
          {buttons.map(({ id, value, callback }) => <button className={styles.calculatorButton + ' ' + styles.buttonReset + (id >= 10 && ' ' + styles.buttonSpecial)} onClick={() => callback(value)} key={id} data-id={id}>{value}</button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
