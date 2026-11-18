import React, { useState } from 'react'

// 계산을 해주는 함수
const getTotal = (price, count) => {
    return price * count
}
export const Basic02 = () => {
    // 1. 변수
    const drink = { title: "라떼", price: 5000 }
    // 일반변수를 값이 변경되더라도 화면을 업데이트 할수 없다
    // 상태변수를 사용하면 화면을 업데이트 할수 있다
    let [double1, setDouble] = useState(0);
    let double2 = 0;

    // 2. 메서드
    const handleCal = () => {
        const total = getTotal(drink.price, 2);
        setDouble(total);
        double2 = getTotal(drink.price, 2)
    }
    // 3. 화면에 붙일 내용
    return (
        <div>
            <h2>{drink.title}</h2>
            <p>한잔 가격은 : {drink.price}</p>
            <button onClick={handleCal}>두잔계산하기</button>
            <p>두잔 가격은 일반변수: {double2}</p>
            <p>두잔 가격은 상태변수: {double1}</p>
        </div>
    )
}
