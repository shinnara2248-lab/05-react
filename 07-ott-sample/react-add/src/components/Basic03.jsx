import React, { useState } from 'react'

export const Basic03 = () => {
    const [count, setCount] = useState(1);

    

    const handlePlus = () => setCount(prev => prev + 1)
    const handleMinus = () => {
        setCount(prev => Math.max(1, prev - 1))
    }
    return (
        <div>
            <div>
                <button onClick={handleMinus}>-</button>
                <strong>{count}잔</strong>
                <button onClick={handlePlus}>+</button>
            </div>
        </div>
    )
}
