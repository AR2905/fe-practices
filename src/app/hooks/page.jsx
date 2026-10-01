'use client'

import { useEffect, useState } from "react"

const page = () => {

    const [state, setState] = useState(0);

    // useEffect(() => {
    //     console.log('Without 2nd param')
    // })
    // useEffect(() => {
    //     console.log('With []')
    // }, [])
    return (<>
        {state}
        <button onClick={() => {
            setState(prev => (prev + 1))
            setState(state + 1)
            setState(prev => (prev + 1))
            setState(state + 1)
            setState(prev => (prev + 1))
            setState(state + 1)
            setState(prev => (prev + 1))
            setState(prev => (prev + 1))
            setState(prev => (prev + 1))
        }}>+</button>

        <Counter />
    </>)
}

export default page

// Initial: 0

// prev => prev + 1   → 1
// state + 1          → 1
// prev => prev + 1   → 2
// state + 1          → 1
// prev => prev + 1   → 2

// Final: 2

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            console.log(count);
        }, 3000);
    };

    return (
        <>
            <button onClick={handleClick}>
                Log Count
            </button>

            <button onClick={() => setCount(c => c + 1)}>
                Increment
            </button>
        </>
    );
}