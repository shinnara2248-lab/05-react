import React, { useState } from 'react'

// input
// event : onChange
// e.target.value => input에 입력된 내용물
// form submit 이벤트가 발생하면 기본 이벤트 때문에 새로고침 된다
// 기본 이벤트 막아주기 => e.preventDefault()를 써야한다
export const Basic04 = () => {
    // 1. 변수
    const [text, setText] = useState("");

    const [msg, setMsg] = useState("");
    // 2. 메서드
    const handleChange = (e) => {
        console.log("매개변수:", e.target.value);
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("전송시작")
        // text 변수의 내용이 비어있는지 체크해서 비어있으면 "이름을 입력하세요"
        // 문자열.trim() => 빈 여백을 제거할 때 사용
        // 내용이 있으면 누가 주문을 했습니다 호출
        if (!text.trim()) { setMsg("이름을 입력하세요"); return }
        setMsg(`${text.trim()}님이 주문을 했습니다`)
    }
    // 3. 화면에 붙일 내용
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>주문자 이름:
                    <input type='text' value={text} onChange={handleChange}></input>
                    {/* onChange={handleChange(매개변수)} */}
                </label>
                <p>입력 중인 주문자: {text}</p>
                <p><button>주문</button></p>
                <p>{msg}</p>
            </form>
        </div>
    )
}
