import { useCounter } from "../hooks"
import Small from "./Small";
import { useState } from 'react';

const Memorize = () => {

    const { counter, incrementar } = useCounter(1);
    const [show, setShow] = useState(true);

  return (
    <div>
        <h1>Counter: <Small value={counter} /></h1>
        <hr />

        <button onClick={() => incrementar()} className="btn btn-primary">+1</button>
        <button onClick={() => setShow(!show)} className="btn btn-outline-primary">Show/Hide</button>
    </div>
  )
}

export default Memorize
