import React, { useState } from 'react'

export const EventSubmit8 = () => {
    // 1.input의 value값을 변경할 변수
    let [text, setText] = useState("");
    // 2.submit 이벤트가 발생하면 input의 value 비우기
    let handleSubmit = (e) => {
        e.preventDefault();
        alert(`당신이 입력한 내용은 ${text}입니다`);
        setText("");
    }
    return (
        <div>
            <h2>form submit</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="전송" />
            </form>
        </div>
    )
}
