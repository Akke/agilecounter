import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const AddToCount = () => {
        setCount(count + 1)
    }

    return (
        <>
            {count}
            
            <button onClick={AddToCount}>Öka</button>
        </>
    );
}

export default Counter;