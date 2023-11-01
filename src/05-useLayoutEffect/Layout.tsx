import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples/";

const Layout = () => {

    const {counter, incrementar} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote /> 
          : <Quote quote={quote} author={author} />
      }

      <button disabled={isLoading} onClick={() => incrementar()} className="btn btn-primary">Next quote</button>
    </div>
  )
}

export default Layout
