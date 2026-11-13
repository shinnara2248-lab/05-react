import React, { useEffect } from 'react'

export const UseEffect1 = () => {
    // 화면에 붙을때 실행, 값이 변경될때, 다른 요소가 랜더링 되어서 변경될때도 실행
    useEffect(() => {
        console.log("랜더링될때 실행")
    })
    return (
        <div>
            <h2>useEffect</h2>
            <p>랜더링 될때마다 실행</p>
        </div>
    )
}
