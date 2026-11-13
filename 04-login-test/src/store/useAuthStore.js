import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { create } from "zustand";
import { auth, db, googleProvider } from "../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useAuthStore = create((set, get) => ({
    //1.변수
    //로그인 
    user: null,

    //2..메서드
    //회원가입
    onMember: async ({ uname, email, password, phone }) => {
        try {
            // console.log("회원가입")
            //이메일과 비밀번호 사용자를 생성시키기
            const userMember = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userMember);
            const user = userMember.user;
            //firestore에 저장하기
            //firestore 컬렉션 이름 -> 문서 user.id
            const userRef = doc(db, "people", user.uid);
            //문서 -> 필드(항목)
            const userInfo = {
                uid: user.uid,
                name: uname,
                email,
                phone
            }
            await setDoc(userRef, userInfo)

            //생성된 생성자에 값을 넣어서 firestore에 저장
        } catch (err) {
            console.log("회원가입 에러발생", err.message);
        }
    },
    //이메일 로그인
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
    //구글로그인
    onGoogleLogin: async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result);
            const user = result.user;

            //FireStore에 저장하기
            const userRef = doc(db, "people", user.uid);

            //이미 회원인지 아닌지 체크하기
            const userDoc = await getDoc(userRef);
            console.log("가져온정보", userDoc.data());

            //회원이 아니면 새로운 정보로 회원가입            
            //회원이면 저장된 정보를 user에 넣어서 사용
            if (!userDoc.exists()) {
                const userInfo = {
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName,
                    phone: user.phoneNumber
                }
                await setDoc(userRef, userInfo);
                set({ user: userInfo })
            }
            else {
                set({ user: userDoc.data() })
            }
            return result.user;
        }
        catch (err) {
            console.log("구글로그인에러", err.message)
        }
    },

    onKakaoLogin: async () => {
        try {
            console.log("카카오 로그인 시작");

            if (!window.Kakao) {
                alert("카카오 SDK가 없습니다.");
                return;
            }

            // 이미 초기화되어 있지 않으면 초기화
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
            }

            // 카카오 로그인
            const authObj =
                await window.Kakao.Auth.login({
                    scope:
                        "profile_nickname,profile_image",
                });

            console.log("카카오 로그인 성공:", authObj);

            // 사용자 정보 가져오기
            const kakaoUser =
                await window.Kakao.API.request({
                    url: "/v2/user/me",
                });

            console.log("카카오 사용자 정보:", kakaoUser);

            // 사용할 사용자 데이터
            const user2 = {
                uid: `kakao_${kakaoUser.id}`,
                // provider: "kakao",
                name: kakaoUser.properties?.nickname || "카카오 사용자",
                profileImage: kakaoUser.properties?.profile_image || "",
                email: kakaoUser.kakao_account?.email || "",
            };

            //firebase에 저장(좋아요,찜리스트,배송조회 등을 저장할 수 있음)
            // Zustand에만 저장
            set({ user: user2 });
            return user2;

        } catch (err) {
            console.log("카카오 로그인 중 오류:", err);
            return null;
        }
    },

    //로그아웃
    onLogout: async () => {
        await signOut(auth);
        set({ user: null })
    }
}))