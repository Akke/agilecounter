import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const AddToCount = () => {
        setCount(count + 1)
    }

    return (
        <>
            {count}
            <br />
            <br />
            <button onClick={AddToCount}>Öka</button>
        </>
    );
}

export default Counter;