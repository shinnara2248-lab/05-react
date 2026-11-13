import React, { useState } from 'react'

export const EventMulti11 = () => {
    // 1.변수선언
    let initForm = {
        name: "", email: "", tel: ""
    }
    const [form, setForm] = useState(initForm);
    // 2.메서드(input change 이벤트가 발생했을떄 데이터를 변경할 메서드, 전송을 클릭했을때 가입정보를 팝업에 보이고, form 내용 비우기)
    const handleChange = (e) => {
        console.log("입력")
        console.log(e.target.name)
        console.log(e.target.value)
        let { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`가입완료 이름:${form.uname} 이메일:${form.email} 전화번호:${form.tel}가 맞나요?`)
        console.log("전송")
        setForm({ uname: "", email: "", tel: "" })
    }
    // 3.화면에 붙일내용
    return (
        <div>
            <h2>회원가입 폼</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="uName">이름</label>
                    <input type="text" id="uName" name="uName" value={form.name} onChange={handleChange} />
                </p>
                <p>
                    <label htmlFor="email">이메일</label>
                    <input type="text" id="email" name="email" value={form.email} onChange={handleChange} />
                </p>
                <p><label htmlFor="tel">전화번호</label>
                    <input type="text" id="tel" name="tel" value={form.tel} onChange={handleChange} />
                </p>
                <p>
                    <input type="submit" value="가입하기" />
                </p>
            </form>
        </div>
    )
}
