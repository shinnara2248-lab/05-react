import React, { useState } from 'react'

export const EventKeyDown = () => {
    let [text, setText] = useState("");
    let handleKeyDown = (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            alert("입력한 값은: " + text);
        }
    }
    return (
        <div>
            <h2>키 이밴트</h2>
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown} />
        </div>
    )
}
