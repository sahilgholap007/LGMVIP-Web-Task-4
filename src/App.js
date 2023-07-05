import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    setDisplay(display.concat(e.target.name));
    console.log(e.target.name);
  }

  const clear = () => {
    setDisplay('');
  }

  const backSpace = () => {
    setDisplay(display.slice(0, -1));
  }

  const calculate = () => {
    try{
      // eslint-disable-next-line
      setDisplay(eval(display).toString())
    }
    catch(err){
      setDisplay('Error') 
    }
  }

  return (
    <div className="App">
      <div className='calculator'>
        <h1>Calculator</h1>
        <div className='display'>{display}</div>
        <div className='buttons'>
          <button onClick={clear} className="btn all-clear-btn" id='clear-all'>AC</button>
          <button onClick={backSpace} className="btn clear-btn" id='clear'>C</button>
          <button name="9" onClick={handleClick} className="btn number-btn">9</button>
          <button name="8" onClick={handleClick} className="btn number-btn">8</button>
          <button name="7" onClick={handleClick} className="btn number-btn">7</button>
          <button name="6" onClick={handleClick} className="btn number-btn">6</button>
          <button name="5" onClick={handleClick} className="btn number-btn">5</button>
          <button name="4" onClick={handleClick} className="btn number-btn">4</button>
          <button name="3" onClick={handleClick} className="btn number-btn">3</button>
          <button name="2" onClick={handleClick} className="btn number-btn">2</button>
          <button name="1" onClick={handleClick} className="btn number-btn">1</button>
          <button name="0" onClick={handleClick} className="btn number-btn">0</button>
          <button name="/" onClick={handleClick} className="btn ">/</button>
          <button name="*" onClick={handleClick} className="btn ">*</button>
          <button name="-" onClick={handleClick} className="btn ">-</button>
          <button name="+" onClick={handleClick} className="btn ">+</button>
          <button name="." onClick={handleClick} className="btn ">.</button>
          <button onClick={calculate} className="btn equal-button">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
