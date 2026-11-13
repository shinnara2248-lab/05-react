import React, { useState } from 'react'

//보여주는 것을 담당하는 자식 컴포넌트
function Display({ msg }) {
    return (
        <div>
            <h2>보여주는 영역 - 자식1</h2>
            <p>msg : {msg}</p>
        </div>
    )
}
// 데이터를 입력하는 자식 컴포넌트
function InputText({ msg, onSend }) {
    return (
        <div>
            <h2>입력하는 영역 - 자식2</h2>
            <p><input type="text" value={msg} onChange={onSend} /></p>
        </div>
    )
}
export const StateUp5 = () => {
    // 1.상태변수
    let [text, setText] = useState("부모가 관리하는 데이터");
    // 2.메서드
    let handleText = (e) => {
        console.log(e);
        setText(e.target.value)
    }
    // 3.화면 붙일 내용
    return (
        <div>
            <h2>형제 컴포넌트 간 데이터 공유</h2>
            <p>부모가 가진 데이터를 형제끼리 공유하여 사용</p>
            {/* {보여주는 담당} */}
            <Display msg={text} />
            {/* 입력 담당 */}
            <InputText msg={text} onSend={handleText} />
        </div>
    )
}
