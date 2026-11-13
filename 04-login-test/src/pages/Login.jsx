import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { onEmailLogin, onGoogleLogin, onKakaoLogin } = useAuthStore();
    //외부의 컴포넌트로 이동하기
    const navigate = useNavigate();
    //1.상태변수
    //이메일, 비밀번호 입력한 내용을 저장할 변수
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    //기본 이메일 로그인
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("이메일 로그인 시도");
        const user = onEmailLogin(email, pass);
        //로그인 정보가 있으면 첫화면으로 이동 (=로그인 성공)
        if (user) {
            navigate("/");
        }
    }

    //구글 로그인
    const handleGoogleLogin = async () => {
        console.log("구글 로그인 시도");
        const user = await onGoogleLogin();
        //로그인 정보가 있으면 첫화면으로 이동 (=로그인 성공)
        if (user) {
            navigate("/");
        }
    }
    //카카오 로그인
    const handleKakaoLogin = () => {
        console.log("카카오 로그인 시도")
        onKakaoLogin();
    }
    return (

        <div className="inner">
            <div>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <div><label>
                        이메일
                        <input type="email" placeholder='이메일'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
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
                        <button type='submit'>로그인</button>
                        <button type='button' onClick={handleGoogleLogin}>구글 로그인</button>
                        <button type='button' onClick={handleKakaoLogin}>카카오 로그인</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
