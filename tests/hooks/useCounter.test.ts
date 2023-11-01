import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import { act } from 'react-dom/test-utils';

describe('Pruebas en el useCounter', () => {

    test('Debe retornar los valores por defecto', () => {
        
        const {result} = renderHook(() => useCounter());
        const {counter, decrementar, incrementar, resetear} = result.current;
        
        expect(counter).toBe(10);
        expect(decrementar).toEqual(expect.any(Function));
        expect(incrementar).toEqual(expect.any(Function));
        expect(resetear).toEqual(expect.any(Function));
    });


    test('Debe generar el counter con el valor de 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;
        
        expect(counter).toEqual(100);
    });

    test('Debe incrementar el contador', () => {
        const {result} = renderHook(() => useCounter());
        const {incrementar} = result.current;

        act(() => incrementar());

        expect(result.current.counter).toBe(11);
    });

    test('Debe decrementar el contador', () => {
        const {result} = renderHook(() => useCounter());
        const {decrementar} = result.current;

        act(() => decrementar());

        expect(result.current.counter).toBe(9);
    });

    test('Debe resetear el contador', () => {
        const {result} = renderHook(() => useCounter(100));
        const {incrementar, resetear} = result.current;

        act(() => {
            incrementar();
            resetear();
        });

        expect(result.current.counter).toBe(100);
    });
    
})