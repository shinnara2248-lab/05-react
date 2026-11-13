import React, { useState } from 'react'

// 상품 정보를 저장할 배열 만들기
const goods = [
    { id: 1, name: "아메리카노", category: "커피", price: 2000, soldOut: false },
    { id: 2, name: "바닐라라떼", category: "커피", price: 6000, soldOut: false },
    { id: 3, name: "녹차라떼", category: "논커피-라떼", price: 5500, soldOut: false },
    { id: 4, name: "딸기라떼", category: "논커피-라떼", price: 5500, soldOut: false },
    { id: 5, name: "유자차", category: "티", price: 3500, soldOut: true },
]

// 카테고리 추출, 중복제거, 전체 추가
// 1. 카테고리 추출, goods.map(item => item.category)
// 2. 중복제거 new Set(배열) -> 커피, 차
// 3. 기존의 배열을 그대로 가지고오고, 전체 추가 ["전체", ...배열명]

const categories = ["전체", ...new Set(goods.map(item => item.category))];
// [전체, 커피, 차]

export const Basic07 = () => {
    // 1. 상태변수->조건에 맞는 요소를 추출하기
    const [text, setText] = useState("");
    const [option, setOption] = useState("전체");
    const filtered = goods.filter(item => (item.category === option || option === "전체") && item.name.includes(text.trim()))
    // 2. 메서드
    // 3. 화면에 붙일 내용
    return (
        <div>
            <p>
                <label>검색<input type="text" value={text} onChange={(e) => setText(e.target, value)} /></label>
                <label>분류
                    <select>
                        {categories.map(kind => <option key={kind} value={kind}>{kind}</option>)}
                    </select>
                </label>
            </p>
        </div>
    )
}
