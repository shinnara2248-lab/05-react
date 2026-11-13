import React, { useState } from 'react'

export const EventChange4 = () => {
    // 1.input값을 저장할 변수
    let [text, setText] = useState("");

    // input에 입력하 value 값이 text에 저장되도록
    const handleChange = (e) => {
        console.log(e.target.value);
        // setText(이전값 => 변경할내용);
        // setText(변경할내용);
        setText(e.target.value);
    }
    return (
        <div>
            <h2>change event - form</h2>
            <p>input 글자입력, 라디오, 체크박스, select 옵션선택</p>
            <p><input type="text" onChange={handleChange} /></p>
            <p>입력한 값 : {text}</p>
        </div>
    )
}
