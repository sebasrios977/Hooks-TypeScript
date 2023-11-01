import { useCounter } from "../hooks"
import { useMemo, useState } from 'react';

const heavyStuff = (iterationNumber: number = 100) => {
    for(let i = 0; i<iterationNumber; i++) {
        console.log('Ahi vamos...');
    }

    return `${iterationNumber} iterations done`;
}

const MemoHook = () => {

    const { counter, incrementar } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <div>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        <h4>{memorizedValue}</h4>

        <button onClick={() => incrementar()} className="btn btn-primary">+1</button>
        <button onClick={() => setShow(!show)} className="btn btn-outline-primary">Show/Hide</button>
    </div>
  )
}

export default MemoHook
