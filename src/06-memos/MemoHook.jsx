import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( interationNumber = 100 ) => {
    for (let i = 0; i < interationNumber; i++) {
        console.log('Ahí vamos...');
        
    }
    return `${ interationNumber } iteraciones realizadas`;

}

export const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [show, setshow] = useState(true)

    const memorizadValue = useMemo ( () => heavyStuff(counter), [counter]);
  return (
    <>
            <h1>Counter: <small>{ counter }</small> </h1>
            <hr />

            <h4>{ memorizadValue }</h4>

            <button 
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>
    
            <button
                className="btn btn-outline-primary"
                onClick={ () => setshow(!show) }
            >
                Show/Hide { JSON.stringify(show)}
            </button>
    
    
    
    </>



  )
}
