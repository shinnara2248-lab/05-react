import React from 'react'
import { useCounter } from '../store/useCounter'

export const Counter = () => {
    const count1 = useCounter(state => state.count);
    // count {count} = useCounter();
    const onPlus1 = useCounter(state => state.onPlus);
    const onMinus1 = useCounter(state => state.onMinus);
    return (
        <div>
            <h2>Counter</h2>
            <p><strong>{count1}</strong></p>
            <div>
                <button onClick={onPlus1}>+1</button>
                <button onClick={onMinus1}>-1</button>
            </div>
        </div>
    )
}
