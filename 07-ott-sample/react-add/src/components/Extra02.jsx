import React from 'react'

// 배열의 데이터를 가져오는 방법
// map:배열의 데이터를 새로운 형태로 변형할때
// filter:배열의 데이터를 조건을 줘서 조건에 맞는것만 추출
// find:배열의 데이터중 조건에 맞는 첫번째 하나를 추출
// some:배열의 데이터중 조건에 맞는게 있는지 없는지 false/true
// reduce:누적합계를 구할때 사용

// const 함수명 = () => 실행할 문장;
// const 함수명 = (매개변수 => 실행할 문장);
// const 함수명 = ((변수1, 변수2) => 실행할 문장)
// const 함수명 = ((변수1, 변수2) => {
// 문장;
// 반환값
// })

// 상품 정보를 저장할 배열 만들기
const goods = [
    { id: 1, name: "아메리카노", category: "커피", price: 2000, soldOut: false },
    { id: 2, name: "바닐라라떼", category: "커피", price: 6000, soldOut: false },
    { id: 3, name: "녹차라떼", category: "논커피-라떼", price: 5500, soldOut: false },
    { id: 4, name: "딸기라떼", category: "논커피-라떼", price: 5500, soldOut: false },
    { id: 5, name: "유자차", category: "티", price: 3500, soldOut: true },
]
export const Extra02 = () => {
    // map goods 배열의 데이터 중 name만 가져와서 사용하도록
    const names = goods.map((item, id) => item.name);
    // filter 사용해서 goods 배열의 데이터 중 커피만 가져오기
    const coffees = goods.filter(item => item.category === "커피");
    // find price 2000원인 상품 찾기
    const selected = goods.find(item => item.price === 2000)
    // some soldOut 찾기
    const hasSold = goods.some(item => item.soldOut);
    // reduce 모든 가격 합계 구하기
    const total = goods.reduce((sum, item) => sum + item.price, 0);
    return (
        <div>
            <p>map : {names}</p>
            <p>filter : 커피 {coffees.length}개</p>
            <p>find : 2000 {selected.name}</p>
            <p>some : 품절상품 {hasSold ? "있음" : "없음"}</p>
            <p>reduce : 전체 합계 {total}</p>
        </div>
    )
}
