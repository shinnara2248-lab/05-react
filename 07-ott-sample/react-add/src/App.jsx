import { Basic01 } from "./components/Basic01"
import { Basic02 } from "./components/Basic02"
import { Basic03 } from "./components/Basic03"
import { Basic04 } from "./components/Basic04"
import { Basic05 } from "./components/Basic05"
import { Basic06 } from "./components/Basic06"
import { Basic07 } from "./components/Basic07"
import { Basic08 } from "./components/Basic08"
import { Basic09 } from "./components/Basic09"
import { Basic10 } from "./components/Basic10"
import { Basic11 } from "./components/Basic11"
import { Basic12 } from "./components/Basic12"
import { Basic13 } from "./components/Basic13"
import { Extra01 } from "./components/Extra01"
import { Extra02 } from "./components/Extra02"

function App() {
  return (
    <>
      <Extra01 />
      <Basic01 />
      <Basic02 />
      <Basic03 />
      <Basic04 />
      <Basic05 />

      {/* 배열의 데이터를 가져오는 방법 */}
      <Extra02 />
      <Basic06 />
      <Basic07 />
      <Basic08 />

      {/* 상태 끌어올리기*/}
      <Basic09 />
      {/* useEffect */}
      <Basic10 />
      <Basic11 />

      {/* 전역변수 사용하기 */}
      <Basic12 />
      <Basic13 />




    </>
  )
}

export default App
