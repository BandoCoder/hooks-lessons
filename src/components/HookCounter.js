import React, {useState} from 'react' 

export default function HookCounter() {

    const [count, setCount] = useState(0)

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    )
}

/*
- Only call hooks from the top level.
    Don't call hooks inside loops, conditions, or nested functions.

-Only call hooks from react functions.
    Call them from within the React functionsl components and not just any
    regular JavaScript function.
*/