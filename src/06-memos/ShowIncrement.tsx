import { memo } from "react";

interface Increment {
    increment: (value: number) => void,
}

const ShowIncrement = memo(({increment}: Increment) => {

    console.log('Me volvi a generar :C');
  return (
    <div>
        <button onClick={() => increment(5)} className="btn btn-primary">
            Incrementar
        </button>
    </div>
  )
})

export default ShowIncrement
