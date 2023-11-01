import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el componente <TodoItem />', () => {
  
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false,
    }

    const onDeleteTodoMock = jest.fn();
    const onCompleteTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el Todo pendiente de completar', () => {
      
        render(<TodoItem 
                todo={todo} 
                onCompleteTodo={onCompleteTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />);
        
        const liElement: HTMLElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement: HTMLElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
    });

    test('Debe de mostrar el componente completado', () => {
        
        todo.done = true;

        render(<TodoItem 
                todo={todo} 
                onCompleteTodo={onCompleteTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />);
        
        const liElement: HTMLElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement: HTMLElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('El span debe de llamar al CompleteTodo cuando se hace click', () => {
        render(<TodoItem 
            todo={todo} 
            onCompleteTodo={onCompleteTodoMock} 
            onDeleteTodo={onDeleteTodoMock} 
        />);

        const spanElement: HTMLElement = screen.getByLabelText('span');
        fireEvent.doubleClick(spanElement);

        expect(onCompleteTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('El boton debe de llamar al DeleteTodo cuando se hace click', () => {
        render(<TodoItem 
            todo={todo} 
            onCompleteTodo={onCompleteTodoMock} 
            onDeleteTodo={onDeleteTodoMock} 
        />);

        const buttonElement: HTMLElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });
    
    
})
