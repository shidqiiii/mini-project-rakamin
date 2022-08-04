import React, { useState } from 'react'

function CounterExample() {
    // (variabel, setVariabel)
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => (setCount(count + 1))}>
                Plus
            </button>

            <h1>{count}</h1>

            <button onClick={() => (setCount(count - 1))}>
                Minus
            </button>
        </div>
    )
}

export default CounterExample