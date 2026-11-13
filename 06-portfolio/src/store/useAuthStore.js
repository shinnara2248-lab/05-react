import { create } from "zustand";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const useAuthStore = create((set, get) => ({
    // 로그인
    user: null,
    // 회원가입
    onMember: async ({ uname, email, password, phone }) => {
        try {
            // 이메일과 비밀번호를 가지는 사용자 생성
            const userMember = await createUserWithEmailAndPassword(auth, email, password)
            const user = userMember.user;
            // zustand
            set({ user })
        }
        catch (err) {
            console.log("회원가입 실패:", err.message)
        }
    },
    // 이메일 로그인
    onEmailLogin: async (email, pass) => {
        try {
            const userLogin = await signInWithEmailAndPassword(auth, email, pass);
            console.log(userLogin);
            set({ user: userLogin.user })
            return userLogin.user;
        }
        catch (err) {
            alert(err.message)
        }
    },
    // 로그아웃
    onLogout: async () => {
        await signOut(auth);
        set({ user: null })
    }
}))