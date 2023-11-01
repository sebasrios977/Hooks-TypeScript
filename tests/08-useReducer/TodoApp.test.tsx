import { render, screen } from "@testing-library/react";
import TodoApp from '../../src/08-useReducer/TodoApp';
import { useTodo } from "../../src/hooks/useTodo";


jest.mock("../../src/hooks/useTodo");
const mockUseTodo = useTodo as jest.MockedFunction<typeof useTodo>;


describe('Pruebas en el <TodoApp />', () => {
  
    mockUseTodo.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo 1', done: false},
            {id: 2, description: 'Todo 2', done: true},
        ],
        allTodos: 2,
        pendingTodos: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleCompleteTodo: jest.fn(),
    })
    test('Debe de mostrar el componente correctamente', () => {
      render(<TodoApp />);
      screen.debug();

      expect(screen.getByText('Todo 1')).toBeTruthy();
      expect(screen.getByText('Todo 2')).toBeTruthy();
      expect(screen.getByRole('textbox')).toBeTruthy();
    });
    
})
