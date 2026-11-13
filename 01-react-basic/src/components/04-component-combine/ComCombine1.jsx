import React from 'react'

// 자식으로 사용할 컴포넌트
function Drink({ title, imgSrc }) {
    return (
        <div>
            <h2>{title}</h2>
            <p><img src={imgSrc} alt={title} /></p>
        </div>
    )
}

export const ComCombine1 = () => {
    return (
        <div>
            <h2>컴포넌트 합성</h2>
            <p>같은 컴포넌트 여러개 삽입하는것을 합성이라고 한다</p>
            <div>
                <Drink title="수박주스" imgSrc="./images/goods2.png" />
                <Drink title="망고코코스무디" imgSrc="./images/goods5.png" />
                <Drink title="말차팥빙파르페" imgSrc="./images/goods9.png" />
            </div>
        </div>
    )
}
