import React, { useState } from 'react'

// 자식 팝업 컴포넌트
const Popup = () => { 
    return(
        <div>
            <h3>고소한 원두로 만든 커피입니다</h3>
        </div>
    )
}

export const Basic05 = () => {
    // 01. 변수
    const [popup, setPopup] = useState(false);
    // 02. 메서드
    const handleToggle = () => {
        // setPopup(prev => !prev);
        setPopup(!popup);
    }
    // 03. 화면에 붙일 내용
    return (
        <div>
            <button onClick={handleToggle}>{popup ? "설명닫기" : "설명보기"}</button>
            {popup && <Popup />}
        </div>
    )
}
