import React from 'react'

export const List1 = () => {
    // 1.변수
    // 음료수의 종류를 저장할 배열
    let drinks = ["커피", "라떼", "오렌지주스"];
    // 2.매서드
    // 3.화면에 뿌려질 내용
    return (
        <div>
            <h2>음료스 리스트 보여주기</h2>
            <p>목록, 배열의 데이터 li안에 넣어서 보여주기</p>
            <p>배열의 데이터를 조작하여 새로운 배열만들기</p>
            <ul>
                {/* 배열명.map ((배열의 데이터를 저장할 변수, 순서변수, 배열별칭) => 조작할 문장) */}
                {drinks.map((item, id) => <li key={id}>{item}</li>)}
            </ul>
        </div>
    )
}
