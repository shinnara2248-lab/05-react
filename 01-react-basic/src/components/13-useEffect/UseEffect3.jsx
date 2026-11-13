import React, { useEffect, useState } from 'react'

export const UseEffect3 = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("count변경", count)
    }, [count])
    return (
        <div>
            <h2>useEffect</h2>
            <p>특정값이 변경될때마다 실행</p>
            <button onClick={() => setCount(count + 1)} className='border-2'>증가</button>
        </div>
    )
}
