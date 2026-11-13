import React, { useEffect } from 'react'

export const UseEffect4 = () => {
    useEffect(() => {
        console.log("컴포넌트 마운트 됨")

        return () => {
            console.log("컴포넌트 사라짐")
        }
    }, [])
    return (
        <div>
            <h2>useEffect</h2>
            <p>언마운트 처리</p>
            <p>타이머를 정리할때 사용된다</p>
        </div>
    )
}
