import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export interface InitialState {
    id?: number,
    description?: string,
    done?: boolean
}

type Reducer = [todo: InitialState[], dispatch: React.Dispatch<any>];

const init = () => {
    const storedData = localStorage.getItem('todos');
    return storedData ? JSON.parse(storedData) : [];
}

export const useTodo = () => {
    const [todos, dispatch]: Reducer = useReducer(todoReducer, [], init);
    
    const handleNewTodo = (todo: InitialState) => {
        const action = {
            type: 'Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id: number) => {
        const action = {
            type: 'Remove Todo',
            payload: id,
        }
        dispatch(action);
    }

    const handleCompleteTodo = (id: number) => {
        const action = {
            type: 'Complete Todo',
            payload: id,
        }
        dispatch(action);
    }


    return {
        allTodos: todos.length,
        pendingTodos: todos.filter(todo => todo.done === false).length,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
    }
}
