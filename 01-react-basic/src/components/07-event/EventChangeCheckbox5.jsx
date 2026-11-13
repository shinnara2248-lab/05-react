import React, { useState } from 'react'

export const EventChangeCheckbox5 = () => {
    // 1.checkbox를 체크상태를 관리한 변수 만들기
    let [checked, setCheck] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.checked);
        setCheck(e.target.checked)
    }
    return (
        <div>
            <h2>checkbox</h2>
            <p>{checked ? "동의함" : "동의안함"}</p>
            <p><label><input type="checkbox" onChange={handleChange} />약관에 동의합니다</label></p>
        </div>
    )
}
