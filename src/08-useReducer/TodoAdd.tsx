import { useForm } from "../hooks"
import { InitialState } from "../hooks/useTodo";


const TodoAdd = ({onNewTodo}: any) => {
  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  });
  

  const onSubmit = (e: any) => {
    e.preventDefault();

    if(description.length <= 1) return;


    const newTodo: InitialState = {
      id: new Date().getTime(),
      done: false,
      description,
    }

    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <div>
        <form onSubmit={onSubmit} className="form-group">
            <input
              onChange={onInputChange}
              name='description'
              value={description}
              className="form-control" 
              type="text" 
              placeholder="Que hay que hacer?"
            />
            <button
              type="submit" 
              className="btn btn-primary mt-2"
            >
              Agregar
            </button>
        </form>
    </div>
  )
}

export default TodoAdd
