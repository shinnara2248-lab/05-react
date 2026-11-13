import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

export const Member = () => {
    const { onMember } = useAuthStore();

    const [formData, setFormData] = useState({
        uname: "",
        email: "",
        password: "",
        phone: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onMember(formData)
    }
    return (
        <div className='inner'>
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
