import { InitialState } from "../hooks/useTodo"

interface Todo {
    todo: InitialState
    onDeleteTodo: (id: number) => void,
    onCompleteTodo: (id: number) => void,
}

const TodoItem = ({todo = {}, onDeleteTodo, onCompleteTodo}: Todo) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          aria-label="span"
          onDoubleClick={() => onCompleteTodo(todo.id!)} 
          className={`align-self-center pointer user-select-none ${todo.done && 'text-decoration-line-through'}`}
          style={{cursor: 'pointer'}}
        >
          {todo.description}
        </span>

        <button 
          onClick={() => onDeleteTodo(todo.id!)} 
          className="btn btn-danger"
        >
          Borrar
        </button>
    </li>
  )
}

export default TodoItem
