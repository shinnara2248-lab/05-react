import React, { useState } from 'react'

function CheckBox({ value, onToggle }) {
    return (
        <div>
            <label>
                <input type="checkbox" onChange={() => onToggle(value)} />{value}
            </label>
        </div>
    )
}
export const StateUp7 = () => {
    // 1.상태변수
    // 취미를 저장할 배열
    let hobby = ["만화", "넷플릭스", "베이킹", "통기타"];

    // 선택한 취미를 저장할 변수
    let [selected, setSeleted] = useState([]);

    // 2.메서드
    // 선택된 취미 목록을 변경할 변수
    const handleToggle = (value) => {
        console.log("toggle", value);
        //선택한 요소가 selected에 있는지 확인해서 있으면 제거, 없으면 추가
        // includes(true,false), some(true,false), find(값, undefined)
        if (selected.includes(value)) {
            setSeleted(selected.filter((s) =>s !== value))
        }
        else {
            setSeleted([...selected, value]);
        }
    }

    // 3.화면에 붙일 내용
    return (
        <div>
            <h2>취미를 선택하세요</h2>
            <p>선택한 취미 : {selected}</p>
            {hobby.map((item, id) =>
                <CheckBox value={item} key={id} onToggle={handleToggle} />
            )}
        </div>
    )
}
