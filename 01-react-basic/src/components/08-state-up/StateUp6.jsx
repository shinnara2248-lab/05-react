import React from 'react'
import { useState } from 'react'

function Button({ sta, onToggle }) {
    return (
        <div>
            <button onClick={onToggle}>{sta ? "stop" : "walk"}</button>
        </div>
    )
}
export const StateUp6 = () => {
    //1.변수
    let [walk, setWalk] = useState(false);
    // 2.메서드
    let handleToggle = () => {
        setWalk(!walk);
    }
    // 3.화면붙일 내용
    return (
        <div>
            <h2>{walk ? "walk" : "stop"}</h2>
            <Button sta={walk} onToggle={handleToggle} />
        </div>
    )
}
