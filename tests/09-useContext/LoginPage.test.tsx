import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';


describe('Pruebas en <LoginPage />', () => {
  
    const setUserMock = jest.fn();


    test('Debe de mostrar el componente sin el usuario', () => {
      
        render(
            <UserContext.Provider value={{user: undefined}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('');

    });

    test('Debe de llamar el setUser cuando se hace click', () => {
      render(
            <UserContext.Provider value={{user: undefined, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalled();
    });
    
    
})
