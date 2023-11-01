import { memo } from 'react';

interface Hijo {
    numero: number,
    incrementar: (numero: number) => void
}

export const Hijo = memo(({ numero, incrementar }: Hijo) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})