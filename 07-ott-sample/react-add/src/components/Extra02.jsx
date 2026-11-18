import React from 'react'
// 배열의 데이터를 가져오는 방법
// map : 배열의 데이터를 새로운 형태로 변형할때
// filter : 배열의 데이터를 조건을 줘서 조건에 맞는것만 추출
// includes : 배열의 데이터중 조건에 맞는 요소를 전부 찾기 true/false
// find : 배열의 데이터중 조건에 맞는 첫번째 하나를 추출
// some : 배열의 데이터중 조건에 맞는게 있는지 없는지 false/true
// reduce : 누적합계를 구할때 사용한다
// 배열.reduce((누적값,현재값) =>{
//     return 누적값+현재값
// },초기값)
// [1,2,3]
// sum = 0  sum = sum+1 , sum = sum+2, sum = sum+3  sum=6
// const 함수명 = () => 실행할문장;
// const 함수명 = (매개변수 => 실행할문장);
// const 함수명 = ((변수1, 변수2) =>  실행할 문장)
// const 함수명 = ((변수1,변수2)=>{
//     문장;
//     return 반환값;
// })


// 상품 정보를 저장할 배열만들기
const goods = [
    { id: 1, name: "커피", category: "커피", price: 3000, soldOut: false },
    { id: 2, name: "라테", category: "커피", price: 3500, soldOut: false },
    { id: 3, name: "녹차", category: "차", price: 3000, soldOut: false },
    { id: 4, name: "유자차", category: "차", price: 3500, soldOut: false },
    { id: 5, name: "자몽차", category: "차", price: 4000, soldOut: true },
]
export const Extra02 = () => {

    // map goods배열의 데이터중 name만 가져와서 사용하도록
    const names = goods.map((item, id) => item.name);

    // filter goods 배열의 데이터중 커피만 가져오기
    const coffees = goods.filter(item => item.category === "커피")
    // find price 3000인것 찾기
    const selected = goods.find(item => item.price === 3000)
    // some soldOut 찾기
    const hasSold = goods.some(item => item.soldOut);
    // reduce 모든 가격 합계 구하기
    // 배열.reduce((누적값,현재값) =>{
    //     return 누적값+현재값
    // },초기값)
    // [1,2,3]
    const total = goods.reduce((sum, item) => sum + item.price, 0)

    return (
        <div>
            <p>map : {names}</p>
            <p>filter : 커피 {coffees.length}개</p>
            <p>find :3000 {selected.name}</p>
            <p>some : 품절상품 {hasSold ? "있음" : "없음"}</p>
            <p>reduce : 전체 합계 {total}</p>
        </div>
    )
}
