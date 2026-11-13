import React, { useState } from 'react'

export const Basic08 = () => {
    // 1. 상태변수
    // input
    const [text, setText] = useState("");
    // 입력된 데이터를 저장
    const [drink, setDrink] = useState([]);
    // 2. 메서드
    // 음료를 추가로 저장할 메서드
    const handleAdd = (e) => {
        // 기본 이벤트 막기
        e.preventDefault();
        // 여백을 입력하면 끝내기
        if (text === "") return;
        // 입력한 데이터를 drink 배열뒤에 추가하기
        setDrink([...drink, text])
        // input에 글자를 입력후, 엔터를 치거나, 추가 버튼을 클릭하면 input 데이터 지워주기
        setText("");
    }
    // 삭제 클릭시 배열에서 해당음료 제거 메서드
    const handleRemove = (index) => {
        // index 받은 데이터와 일치하지 않는것만 배열에 남기기
        const result = drink.filter((d, id) => id !== index)
        setDrink(result);
    }
    // 3. 화면에 붙일 내용
    return (
        <div>
            <h2>주문할 음료를 입력하세요</h2>
            <form onSubmit={handleAdd}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type='submit'>추가</button>
            </form>
            <ul>
                {drink.map((d, index) => <li>{d}<button>삭제</button></li>)}
            </ul>
        </div>
    )
}
