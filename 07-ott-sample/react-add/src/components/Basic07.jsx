import React, { useState } from 'react'
// 상품 정보를 저장할 배열만들기
const goods = [
    { id: 1, name: "커피", category: "커피", price: 3000, soldOut: false },
    { id: 2, name: "라테", category: "커피", price: 3500, soldOut: false },
    { id: 3, name: "녹차", category: "차", price: 3000, soldOut: false },
    { id: 4, name: "유자차", category: "차", price: 3500, soldOut: false },
    { id: 5, name: "자몽차", category: "차", price: 4000, soldOut: true },
]

// 카테고리 추출,중복제거, 전체 추가
// 1. 카테고리 추출 goods.map(item => item.category) ->커피,커피,차,차,차
// 2. 중복제거 new Set(배열) ->커피, 차
// 3. 기본의 배열을 그대로 가지고오고, 전체 추가 ["전체",...배열명]
const categories = ["전체", ...new Set(goods.map(item => item.category))];
// ["전체","커피","차"]

export const Basic07 = () => {
    // 1. 상태변수
    const [text, setText] = useState("");
    const [option, setOption] = useState("전체");

    // 조건에 맞는 요소를 추출하기
    // goods 안에 있는 데이터중 카테고리가 일치하는 요소를 찾아서 저장
    // 입력된 데이터가 item.name에 있는지 찾아서
    // 입력된 글자에 공백 제거하기 .trim()
    const filtered = goods.filter(item =>
        (item.category === option || option === "전체")
        && item.name.includes(text.trim())
    )
    // 2. 메서드
    // 3. 화면에 붙일 내용
    return (
        <div>
            <p>
                <label>검색
                    <input type="text" value={text}
                        onChange={(e) => setText(e.target.value)} /></label>
                <label>분류
                    <select value={option}
                        onChange={(e) => setOption(e.target.value)}
                    >
                        {categories.map(kind =>
                            <option key={kind} value={kind}>{kind}</option>
                        )}
                    </select>
                </label>
            </p>
            <ul>
                {filtered.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}
