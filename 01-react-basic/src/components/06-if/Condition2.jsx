import React from 'react'

// 상품 1개를 보여줄 li 컴포넌트 만들기
function GoodsItem({ kind, isHas }) {
    // if (isHad) {
    //     return (
    //         <li>{kind} </li>
    //     )
    // }
    // else {
    //     return (
    //         <li>{kind} <button>품절</button> </li>
    //     )
    // }
    return (
        <li>
            {kind}
            {!isHas && <button>픔절</button>}
        </li>
    )
}
export const Condition2 = () => {
    // 1. 일반변수 배열오브젝트
    const goodsList = [
        { id: 1, kind: "자켓", isHas: true },
        { id: 2, kind: "셔츠", isHas: true },
        { id: 3, kind: "패딩", isHas: true },
        { id: 4, kind: "바지", isHas: false },
        { id: 5, kind: "치마", isHas: false }
    ]
    return (
        <ul>
            <div>{goodsList.map((goods) =>
                <GoodsItem
                    key={goods.id}
                    kind={goods.kind}
                    isHas={goods.isHas}
                />
            )}
            </div>
        </ul>
    )
}
