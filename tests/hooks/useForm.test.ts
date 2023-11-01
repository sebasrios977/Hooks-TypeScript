import { renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';
import { act } from 'react-dom/test-utils';


describe('Pruebas en el useForm', () => {
  
    const initialForm = {
        name: 'Sebastian',
        email: 'sebastian@google.com'
    }

    test('Debe de regresar los valores por defecto', () => {
      const {result} = renderHook(() => useForm(initialForm));
      expect(result.current).toEqual({
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any(Function),
        onResetForm: expect.any(Function)
      })
    });


    test('Debe de cambiar el nombre del formulario', () => {

        const newName = 'Sebas';
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current;

        act(() => {
            onInputChange({target: {name: 'name', value: newName}});
        });
        
        expect(result.current.formState.name).toBe(newName);
        expect(result.current.name).toBe(newName);
    });

    test('Debe de realizar el reset del formulario', () => {

        const newName = 'Sebas';
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;

        act(() => {
            onInputChange({target: {name: 'name', value: newName}});
            onResetForm();
        });
        
        expect(result.current.formState.name).toBe('Sebastian');
        expect(result.current.name).toBe('Sebastian');
    });
    
    
})
