import { InitialState } from "../hooks/useTodo";

interface Action {
    type?: string,
    payload?: any,
}

export const todoReducer = (initialState: InitialState[] = [], action: Action = {}): InitialState[] => {

    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload];
        case 'Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);
        case 'Complete Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }
}