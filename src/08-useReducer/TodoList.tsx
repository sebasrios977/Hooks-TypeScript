import { InitialState } from "../hooks/useTodo"
import TodoItem from "./TodoItem"

export interface Todos {
    todos: InitialState[],
    onDeleteTodo: (id: number) => void,
    onCompleteTodo: (id: number) => void,
};

const TodoList = ({todos = [], onDeleteTodo, onCompleteTodo}: Todos) => {
  return (
    <div>
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={onDeleteTodo} 
                        onCompleteTodo={onCompleteTodo}
                    />
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList
