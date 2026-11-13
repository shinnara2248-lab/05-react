import React from 'react'

export const Style1 = () => {
    // 스타일 변수
    const boxStyle = {
        backgroundColor: "pink",
        color: "#fff"
    }
    return (
        <div className='inner'>
            <h2>Style1 인라인</h2>
            <p style={{ fontSize: "40px", color: "red" }}>인라인 css - 태그에 직접적용</p>
            <p style={boxStyle}>인라인 css - 변수로 만들어서 주기</p>
            <p>속성명은 낙타봉표기법, 여러개를 적용할 경우 ,로 구분한다</p>
        </div>
    )
}
