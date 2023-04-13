import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";



export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => {
        setCounter( (counter)=> counter + value );
      },
      [],
    )
    
    useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    }, [incrementFather])
    


    // const incrementFather = () =>{
    //     setCounter( counter+1 );
    // }
  return (
        <>
         <h1>useCallback Hook: { counter } </h1>
         <hr />

         <ShowIncrement increment={incrementFather}/>
        
        </>
  )
}
