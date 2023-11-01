import { fireEvent, render, screen } from "@testing-library/react";
import MultipleCustomHooks from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;
const mockUseCounter = useCounter as jest.MockedFunction<typeof useCounter>;

describe('Pruebas en MultipleCustomHooks', () => {


  const mockIncrement = jest.fn();
  mockUseCounter.mockReturnValue({
    counter: 1,
    incrementar: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('Debe de mostrar el componente por defecto', () => {
    // Configura el mock de useFetch para que retorne el valor deseado
    mockUseFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Next quote'));

    const nextButton = screen.getByRole('button');
    expect(nextButton).toBeTruthy();
  });

  test('Debe de mostrar un quote', () => {
    // Configura el mock de useFetch para que retorne el valor deseado
    mockUseFetch.mockReturnValue({ data: [{ author: 'sebas', quote: 'Hola mundo' }], isLoading: false, hasError: null });

    render(<MultipleCustomHooks />);
    expect(screen.getByText('Hola mundo')).toBeTruthy();
    expect(screen.getByText('sebas')).toBeTruthy();

    const nextButton: HTMLElement = screen.getByRole('button', {name: 'Next quote'});
    expect(nextButton).toBeTruthy();
  });

  test('Debe llamar la funcion de incrementar', () => {
    mockUseFetch.mockReturnValue({ data: [{ author: 'sebas', quote: 'Hola mundo' }], isLoading: false, hasError: null });
    
    render(<MultipleCustomHooks />);
    const nextButton: HTMLElement = screen.getByRole('button', {name: 'Next quote'});
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled(); 

  })
  
});
