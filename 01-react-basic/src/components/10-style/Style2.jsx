import React from 'react'

export const Style2 = () => {
    const divInner = {
        width: "1200px",
        margin: "0 auto",
        background: "#ddd"
    }
    const h2Title = {
        fontSize: "40px",
        fontWeight: "900"
    }
    return (
        <div>
            <h2 style={h2Title}>제품제목</h2>
            <p>제품 설명</p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>가격: 500,000</p>
        </div>
    )
}
