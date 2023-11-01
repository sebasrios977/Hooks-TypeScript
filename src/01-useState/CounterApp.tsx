import { useState } from "react";

interface Counter {
    counter1: number,
    counter2: number,
    counter3: number,
}

const initialState: Counter = {
    counter1: 10,
    counter2: 20,
    counter3: 30,
}

const CounterApp = () => {

    const [state, setCounter] = useState(initialState);
    const {counter1, counter2, counter3} = state;

  return (
    <div>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />

      <button 
        className="btn btn-primary" 
        onClick={() => setCounter({
            ...state,
            counter1: counter1 + 1,
        })}
        >
            +1
        </button>
    </div>
  )
}

export default CounterApp
