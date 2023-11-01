import { MemoryRouter } from 'react-router-dom';
import MainApp from '../../src/09-useContext/MainApp';
import { render, screen } from '@testing-library/react';



describe('Debe de mostar el HomePage', () => {
  

    test('Debe de mostrar el HomePage', () => {
      render(
        <MemoryRouter>
            <MainApp />
        </MemoryRouter>
      );

      expect(screen.getByText('Home')).toBeTruthy();
    });

    test('Debe de mostrar el LoginPage', () => {
      render(
        <MemoryRouter initialEntries={['/login']}>
            <MainApp />
        </MemoryRouter>
      );
    
      expect(screen.getByLabelText('active').className).toContain('active');
      expect(screen.getByText('Login')).toBeTruthy();
    });

    
});
