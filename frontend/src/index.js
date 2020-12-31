import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createContainer } from "unstated-next";
//import App from './components/app/App';

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

let Counter = createContainer(useCounter);

function CounterDisplay() {
  let counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>+</button>
      <span>{counter.count}</span>
      <button onClick={counter.decrement}>-</button>
    </div>
  );
}

function App() {
  return (
    <Counter.Provider>
      <CounterDisplay />
      <Counter.Provider initialState={2}>
        <div>
          <div>
            <CounterDisplay />
          </div>
        </div>
      </Counter.Provider>
    </Counter.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
