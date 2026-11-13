import React, { useState } from 'react'

export const EventChangeRadio6 = () => {
    // 1.성별을 선택하여 저장할 변수
    let [gender, setGender] = useState("");
    // 2.라디오를 체크했을때 값을 변경할 메서드
    let handleChange = (e) => {
        setGender(e.target.value)
    }
    return (
        <div>
            <h2>성별을 선택하세요</h2>
            <p>선택된 성별은? <strong>{gender}</strong></p>
            <label>
                남자
                <input type="radio" value="남자" name='gender' onChange={handleChange} />
            </label>
            <label>
                여자 <input type="radio" value="여자" name='gender' onChange={handleChange} />
            </label>
        </div>
    )
}
