import { useEffect } from "react"
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

const TodoApp = () => {
    const {todos, allTodos, pendingTodos, handleNewTodo, handleDeleteTodo, handleCompleteTodo} = useTodo();

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  return (
      <div>
          <h1>TodoApp {allTodos}, <small>Pendientes: {pendingTodos}</small></h1>
          <hr />

          <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo} 
                        onCompleteTodo={handleCompleteTodo}
                    />
                </div>
   
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
          </div>
      </div>
  )
}

export default TodoApp
