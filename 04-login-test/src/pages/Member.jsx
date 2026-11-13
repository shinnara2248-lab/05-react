import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

export const Member = () => {
    //전역변수, 메서드 사용하기
    const { onMember } = useAuthStore();

    //1.상태변수
    const [formData, setFormData] = useState({
        uname: "",
        email: "",
        password: "",
        phone: ""
    })

    //2.메서드
    //input 입력한 데이터를 변수에 변경해주기
    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value })
    }

    //회원가입을 클릭하면 기본이벤트 막고, 데이터를 onMember에 보내기
    const handleSubmit = (e) => {
        e.preventDefault();
        onMember(formData);
    }
    return (
        <div className="inner">
            <div>
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>이름
                            <input type="text" name="uname"
                                onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>이메일
                            <input type="email" name="email"
                                onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>비밀번호
                            <input type="password" name="password"
                                onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>전화번호
                            <input type="tel" name="phone"
                                onChange={handleChange} />
                        </label>
                    </div>
                    <div>
                        <button type="submit">회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
