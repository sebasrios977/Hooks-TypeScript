import { render, screen } from '@testing-library/react';
import HomePage from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';


describe('Pruebas en <HomePage />', () => {
  
    const user = {
        id: 2,
        name: 'Sebas',
        email: 'sebas@google.com',
    }

    test('Debe de mostrar el componente sin el usuario', () => {
      
        render(
            <UserContext.Provider value={{user: undefined}}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('');
    });

    test('Debe de mostrar el componente con el usuario', () => {
      
        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage />
            </UserContext.Provider>
        );
        screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(`${user.name}`);
    });
    
});
