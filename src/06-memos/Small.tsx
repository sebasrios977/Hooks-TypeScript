import { memo } from "react";

interface Value {
    value: number
}

const Small = memo(({value}: Value) => {

    console.log('Me volvi a dibujar :c');
  return (
    <div>
        <small>{value}</small>
    </div>
  )
})

export default Small
