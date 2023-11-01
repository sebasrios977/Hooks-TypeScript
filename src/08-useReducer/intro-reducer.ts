export interface State {
    id: number,
    todo: string,
    done: boolean,
}

const initialState: State[] = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

const todoReducer = (state = initialState, action: any = {}) => {

    if(action.type === '[TODO] Agregar Todo') {
        return [...state, action.payload];
    }


    return state;
}


let todos: State[] = todoReducer();

const newTodo: State = {
    id: 2,
    todo: 'Recolectar la piedra del amor',
    done: false,
}
const newTodo2: State = {
    id: 3,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] Agregar Todo',
    payload: newTodo,
}

const addTodoAction2 = {
    type: '[TODO] Agregar Todo',
    payload: newTodo2,
}

todos = todoReducer(todos, addTodoAction);
let todos2 = todoReducer(todos, addTodoAction2);

console.log(todos2);