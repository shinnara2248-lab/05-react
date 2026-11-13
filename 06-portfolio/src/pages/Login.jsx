import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { onEmailLogin } = useAuthStore();

    const navigate = useNavigate();

    // 상태변수
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await onEmailLogin(email, pass);

        if (user) {
            navigate("/");
        }
    }
    return (
        < div className='inner' >
            <div>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>이메일
                            <input type="email" placeholder='이메일'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            비밀번호
                            <input type="password" placeholder='비밀번호'
                                value={pass}
                                onChange={(e) => setPass(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <button type="submit">로그인</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
