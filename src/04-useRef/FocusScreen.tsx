import { useRef } from "react";

const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
      inputRef.current?.select();
    }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} className="form-control mb-2" type="text" placeholder='Ingrese su nombre' />
      <input className="form-control mb-2" type="text" placeholder='Ingrese su apellido' />
      <input className="form-control mb-2" type="number" placeholder='Ingrese su telefono' />
      <button onClick={onClick} className="btn btn-primary mt-2">Set Focus</button>
    </div>
  )
}

export default FocusScreen
