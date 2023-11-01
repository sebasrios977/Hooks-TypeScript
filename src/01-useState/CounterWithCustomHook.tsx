import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {

    const {counter, incrementar, decrementar, resetear} = useCounter();

  return (
    <div>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button onClick={() => incrementar(1)} className="btn btn-primary">+1</button>
      <button onClick={resetear} className="btn btn-primary">Reset</button>
      <button onClick={() => decrementar(1)} className="btn btn-primary">-1</button>
    </div>
  )
}

export default CounterWithCustomHook
