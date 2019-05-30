import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>
    <div className = "calculator">
      <CalculatorDisplay />
      <div className = "input">
        <ActionButton buttonStyle = "actionButton" text = "Clear" />
        <div className = "numbers">
          <NumberButton buttonStyle = "digit" text = "1" />
          <NumberButton buttonStyle = "digit" text = "2" />
          <NumberButton buttonStyle = "digit" text = "3" />
          <NumberButton buttonStyle = "digit" text = "4" />
          <NumberButton buttonStyle = "digit" text = "5" />
          <NumberButton buttonStyle = "digit" text = "6" />
          <NumberButton buttonStyle = "digit" text = "7" />
          <NumberButton buttonStyle = "digit" text = "8" />
          <NumberButton buttonStyle = "digit" text = "9" />
          
        </div>
        <ActionButton buttonStyle = "actionButton" text = "0" />
      </div>
      <div className = "operators">
        <NumberButton buttonStyle = "operatorButton" text = "/" />
        <NumberButton buttonStyle = "operatorButton" text = "x" />
        <NumberButton buttonStyle = "operatorButton" text = "-" />
        <NumberButton buttonStyle = "operatorButton" text = "+" />
        <NumberButton buttonStyle = "operatorButton" text = "=" />
      </div>

    </div>
   
  );
};

export default App;
