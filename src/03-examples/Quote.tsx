import { useLayoutEffect, useRef, useState } from "react"

interface Quote {
    quote: string,
    author: string
}

interface BoxSize {
  width: number,
  height: number,
}

const initialBoxSize: BoxSize = {
  width: 0,
  height: 0,
}

export const Quote = ({quote, author}: Quote) => {

  const pRef = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState(initialBoxSize);

  useLayoutEffect(() => {
    const {width, height} = pRef.current!.getBoundingClientRect();
    setBoxSize({width, height});

  }, [quote]);

  return (
    <>
      <blockquote 
        className="blockquote text-end"
      >
        <p ref={pRef} className="mb-1">{quote}</p>
        <footer className="blockquote-footer" style={{marginTop: '1rem'}}>{author}</footer>
      </blockquote>
      
      <code>
        {JSON.stringify(boxSize)}
      </code>
    </>
  )
}
