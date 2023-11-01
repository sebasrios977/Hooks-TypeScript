import { useState } from 'react';

// interface CounterState {
//     counter: number,
//     incrementar: (value?: number) => void,
//     decrementar: (value?: number) => void,
//     resetear: () => void,
// }

export const useCounter = (initialValue: number = 10): any => {

    const [counter, setCounter] = useState(initialValue);

    const incrementar = (value: number = 1) => {
        setCounter(counter + value);
    }
    const decrementar = (value: number = 1) => {
        if(counter === 0) return;
        setCounter(counter - value);
    }
    const resetear = () => {
        setCounter(initialValue);
    }
    return {
        counter,
        incrementar,
        decrementar,
        resetear,
    }
}