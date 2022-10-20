import { useState } from "react";

const Counter = () =>{

    
    const [count, setCount] = useState(0)

    const Aumentando= ()=> {
       setCount(count+1)
    }
    const decremento = () =>{
        setCount(count-1)
    }

    return(
        <div className="counter-r">
            <h1>{count}</h1>
            <button onClick={decremento} className="green">-</button>
            <button onClick={Aumentando}>+</button>
        </div>
    )
} 

export default Counter