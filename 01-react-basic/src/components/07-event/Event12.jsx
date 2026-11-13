import React, { useState } from 'react'

export const Event12 = () => {
    // 1.할일을 저장할 배열
    let [todos, setTodos] = useState([]);
    // 2.입력한 데이터를 저장할 변수
    let [inputText, setInput] = useState("");
    // 3.입력한 데이터를 변경할 메서드
    const handleChange = (e) => {
        console.log("데이터 입력");
        setInput(e.target.value);
    }
    // 4.할일을 추가해줄 메서드(엔터키를 입력했을때 할 일 추가)
    const onAddTodo = (e) => {
        console.log("추가", todos);
        setTodos([
            ...todos,
            inputText
        ])
        setInput("");
    }

    const handleKey = (e) => {
        console.log("키다운");
        if (e.key === "Enter") {
            onAddTodo();
        }
    }
    // 5.화면에 붙일 내용
    return (
        <div>
            <h2>오늘의 할일을 입력하세요</h2>
            <div>
                <input type="text"
                    onChange={handleChange}
                    onKeyDown={handleKey} />
                <button onClick={onAddTodo}>추가</button>
            </div>
            <ul>
                {todos.map((todo, id) =>
                    <li key={id}>{todo}</li>
                )}
            </ul>
        </div>
    )
}
