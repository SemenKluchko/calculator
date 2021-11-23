import { useState } from 'react';


function App() {
  const [calc, setCalc] = useState(''),
    ops = ['/', '*', '+', '-', '.'];

  const checkingOps = () => {
    // if the value we've typed is an operator and the last value we've typed was an operator 
    if (ops.includes(calc) && ops.includes(calc.slice(-1))) return;
  }

  const updateCalc = value => {
    checkingOps();
    setCalc(calc + value);
  }

  // calculating the values by clicking the equal sign
  const calculate = () => {
    checkingOps();
    if (calc) setCalc(eval(calc).toString());
  }

  const clearCalc = () => {
    if (calc) {
      setCalc('');
    } else {
      return;
    }
  }

  /* here I've created function that create buttons from 1 to 9,
   instead of typing them manually */
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }

    return digits;
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {calc || '0'}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={clearCalc}>C</button>
        </div>


        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>


    </div>
  );
}

export default App;
