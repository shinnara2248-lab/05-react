import React from 'react'

// 자바스크립트 : 배열, 객체, 구조분해할당
// 여러개의 데이터를 저장할때 사용한다
// 배열 : 방번호 순서로 데이터 체크
// 객체(오브젝트) : 속성명으로 데이터 체크
export const Extra01 = () => {
    // 1. 변수
    const tags = ["커피", "음료"];
    const product = { id: 1, title: "드립백", price: 5000 }
    // 구조분해할당
    const { title, price } = product;
    const [first] = tags;
    const message = `${title}의 두개 가격은 ${price*2}입니다`
    // 2. 메서드
    // 3. 화면에 보여줄 내용 jsx문법 사용
    // 전체를 하나로 감싸기
    // <></>, <div></div>등
    // [] : 변수, 메서드, 수식 스크립트 코드가 들어간다.
    return (
        <div>
             <h2>coffee</h2>
             <h3>{title}</h3>
             <p>{}price</p>
             <hr />
             <h3>배열 : {first}</h3>
             <p>{message}</p>
        </div>
    )
}
