import React, { useState } from 'react'

// 1. 자식 컴포넌트 - 색상 보여주는 영역
function ColorDisplay({ color }) {
    return (
        <div>
            <h2>색상 출력 - 자식1</h2>

            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color,
                }}
            ></div>

            <p>
                선택한 색상 코드 : <strong>{color}</strong>
            </p>
        </div>
    )
}

// 2. 자식 컴포넌트 - 색상 선택하는 영역
function ColorPicker({ color, onColor }) {
    return (
        <div>
            <h2>색상 선택 영역 - 자식2</h2>

            <input
                type="color"
                value={color}
                onChange={onColor}
            />
        </div>
    )
}

// 3. 부모 컴포넌트
export const StateUp8 = () => {

    // 상태변수
    let [color, setColor] = useState("#3456dd");

    // 색상 변경
    let handleColor = (c) => {
        console.log(c.target.value);
        setColor(c.target.value);
    }

    return (
        <div>
            <h2>형제 컴포넌트간 색상 공유</h2>

            {/* 선택된 색상을 보여줄 컴포넌트 */}
            <ColorDisplay color={color} />

            {/* 색을 변경할 컴포넌트 */}
            <ColorPicker
                color={color}
                onColor={handleColor}
            />
        </div>
    )
}