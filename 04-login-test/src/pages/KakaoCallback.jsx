import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

export const KakaoCallback =
  () => {
    const navigate =
      useNavigate();

    const [code, setCode] =
      useState("");

    const [
      errorMessage,
      setErrorMessage,
    ] = useState("");

    useEffect(() => {
      const params =
        new URLSearchParams(
          window.location
            .search
        );

      const kakaoCode =
        params.get("code");

      const error =
        params.get("error");

      const errorDescription =
        params.get(
          "error_description"
        );

      if (error) {
        setErrorMessage(
          errorDescription ||
            error
        );

        return;
      }

      if (kakaoCode) {
        console.log(
          "카카오 인가코드:",
          kakaoCode
        );

        setCode(
          kakaoCode
        );
      }
    }, []);

    return (
      <main className="page">
        <div className="inner card">
          <p className="eyebrow">
            KAKAO CALLBACK
          </p>

          <h2>
            카카오 로그인 결과
          </h2>

          {errorMessage ? (
            <>
              <p>
                카카오 로그인이
                취소되었거나 오류가
                발생했습니다.
              </p>

              <div className="code-box">
                {
                  errorMessage
                }
              </div>
            </>
          ) : code ? (
            <>
              <p className="success">
                카카오 인증에
                성공했습니다.
              </p>

              <p>
                현재 프론트엔드
                예제에서는
                authorization
                code까지 확인합니다.
              </p>

              <div className="code-box">
                {code}
              </div>

              <p className="notice">
                실제 카카오 사용자
                정보 조회를 하려면
                이 인가코드를 서버에서
                access token으로
                교환해야 합니다.
              </p>
            </>
          ) : (
            <p>
              카카오 로그인 처리
              중입니다...
            </p>
          )}

          <button
            type="button"
            className="btn primary"
            onClick={() =>
              navigate("/")
            }
          >
            HOME
          </button>
        </div>
      </main>
    );
  };
