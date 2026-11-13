import './App.css'
import ClassComponent1 from './components/01-Component/ClassComponent1'
import FuncComponent2 from './components/01-Component/FuncComponent2'
import FuncComponent3 from './components/01-Component/FuncComponent3'
import Function2 from './components/02-jsx/Function2'
import { Variable1 } from './components/02-jsx/Variable1'
import { ComChild5 } from './components/03-component-props/ComChild5'
import { ComProps1 } from './components/03-component-props/ComProps1'
import { ComProps2 } from './components/03-component-props/ComProps2'
import { ComProps3 } from './components/03-component-props/ComProps3'
import { ComProps4 } from './components/03-component-props/ComProps4'
import { ComCombine1 } from './components/04-component-combine/ComCombine1'
import { List1 } from './components/05-list/List1'
import { ListObject2 } from './components/05-list/ListObject2'
import { ListObject3 } from './components/05-list/ListObject3'
import { ListObject4 } from './components/05-list/ListObject4'
import { ListObject5Haevichi } from './components/05-list/ListObject5Haevichi'
import { ListObject6 } from './components/05-list/ListObject6'
import { ConditionToggle1 } from './components/06-if/ConditionToggle1'
import { Condition2 } from './components/06-if/Condition2'
import { CondotionLoginLofout3 } from './components/06-if/ConditionLoginLogout3'
import { ConditionLoginLogout4 } from './components/06-if/ConditionLoginLogout4'
import { ConditionModal5 } from './components/06-if/ConditionModal5'
import { EventMouse1 } from './components/07-event/EventMouse1'
import { EventCounter2 } from './components/07-event/EventCounter2'
import { EventMouse3 } from './components/07-event/EventMouse3'
import { EventChange4 } from './components/07-event/EventChange4'
import { EventChangeCheckbox5 } from './components/07-event/EventChangeCheckbox5'
import { EventChangeRadio6 } from './components/07-event/EventChangeRadio6'
import { EventChangeSelect7 } from './components/07-event/EventChangeSelect7'
import { EventSubmit8 } from './components/07-event/EventSubmit8'
import { EventKeyDown } from './components/07-event/EventKeyDown'
import { EventMulti10 } from './components/07-event/EventMulti10'
import { EventMulti11 } from './components/07-event/EventMulti11'
import { Event12 } from './components/07-event/Event12'
import { StateUp1 } from './components/08-state-up/StateUp1'
import { StateUp2 } from './components/08-state-up/StateUp2'
import { StateUp3 } from './components/08-state-up/StateUp3'
import { StateUp4 } from './components/08-state-up/StateUp4'
import { StateUp5 } from './components/08-state-up/StateUp5'
import { StateUp6 } from './components/08-state-up/StateUp6'
import { StateUp7 } from './components/08-state-up/StateUp7'
import { StateUp8 } from './components/08-state-up/StateUp8'
import { Style1 } from './components/10-style/Style1'
import { Style2 } from './components/10-style/Style2'
import { Style3 } from './components/10-style/Style3'
import { Style4 } from './components/10-style/Style4'
import { StyleScss5 } from './components/10-style/StyleScss5'
import { StyleScss6 } from './components/10-style/StyleScss6'
import { StyledComponent7 } from './components/10-style/StyledComponent7'
import { StyledComponent8 } from './components/10-style/StyledComponent8'
import { StyleTailwind9 } from './components/10-style/StyleTailwind9'
import { StyleTailwind10 } from './components/10-style/StyleTailwind10'
import { AddressSearch } from './components/12-plugin/AddressSearch'
import { Marquee1 } from './components/12-plugin/Marquee1'
import { SwiperTest2 } from './components/12-plugin/SwiperTest2'
import { SwiperImg3 } from './components/12-plugin/SwiperImg3'
import { SwiperOffer4 } from './components/12-plugin/SwiperOffer4'
import { UseContext1 } from './components/11-useContext/UseContext1'
import { UseContext2 } from './components/11-useContext/UseContext2'
import { UseContext3 } from './components/11-useContext/UseContext3'
import { UseContext4 } from './components/11-useContext/UseContext4'
import { UseEffect1 } from './components/13-useEffect/UseEffect1'
import { UseEffect2 } from './components/13-useEffect/UseEffect2'
import { UseEffect3 } from './components/13-useEffect/UseEffect3'
import { UseEffect4 } from './components/13-useEffect/UseEffect4'
import { UseEffect5 } from './components/13-useEffect/UseEffect5'

function App() {
  // 객체 만들기
  const fruit = {
    kind: "딸기",
    imageUrl: "./images/strawberry.jpg",
    imageSize: 200,
    imageAlt: "새콤달달한 냥딸기!!"
  }
  return (
    <>
      <h2>컴포넌트의 종류</h2>
      {/* <p>클래스 컴포넌트, 함수 컴포넌트</p>
      <ClassComponent1 />
      <FuncComponent2 />
      <FuncComponent3 />
      <hr />
      <h2>jsx문법 살펴보기</h2>
      <Variable1 />
      <Function2 /> */}

      <hr />
      <h2>컴포넌트에 속성 전달</h2>
      {/* <ComProps1 name="신나라" age={20} />
      <ComProps1 name="짱구" age={5} />
      <ComProps2 uname="리액트" hour={1} />
      <ComProps3
        title={fruit.kind}
        imgUrl={fruit.imageUrl}
        imgSize={fruit.imageSize}
        imgAlt={fruit.imageAlt}
      />
      <ComProps4 fruits={fruit} />
      <ComChild5>
        <h3>컴포넌트 자식</h3>
        <p>컴포넌트 시작과 끝 사이에 있는 내용이 자식입니다</p>
      </ComChild5> */}
      <hr />

      <h2>컴포넌트 합성</h2>
      {/* <ComCombine1 /> */}
      <hr />

      <h2>리스트-배열, 배열오브젝트</h2>
      {/* <List1 />
      <ListObject2 />
      <ListObject3 />
      <ListObject4 />
      <ListObject5Haevichi />
      <ListObject6 /> */}
      <hr />

      <h2>조건문</h2>
      {/* <ConditionToggle1 />
      <Condition2 />
      <CondotionLoginLofout3 />
      <ConditionLoginLogout4 />
      <ConditionModal5 /> */}
      <hr />

      <h2>이벤트</h2>
      {/* <p>마우스 이벤트
        -onClick, onMouseOver, onMouseOut, onMouseEnter, onMouseLeave
      </p>
      <p>키보드 이벤트
        -onKeyDown, onKeyUp
      </p>
      <p>폼 이벤트
        -onChange(입력값이 변경될때 - text글자입력, 라디오, 체크, select)
        -onInput(입력할때마다)
        -onSubmit(제출)
      </p>
      <EventMouse1 />
      <EventCounter2 />
      <EventMouse3 />
      <EventChange4 />
      <EventChangeCheckbox5 />
      <EventChangeRadio6 />
      <EventChangeSelect7 />
      <EventSubmit8 />
      <EventKeyDown />
      <EventMulti10 />
      <EventMulti11 />
      <Event12 /> */}
      <hr />

      <h2>state</h2>
      {/* <StateUp1 />
      <StateUp2 />
      <StateUp3 />
      <StateUp4 />
      <StateUp5 />
      <StateUp6 />
      <StateUp7 />
      <StateUp8 /> */}
      <hr />

      <h2>style 사용방법</h2>
      {/* <Style1 />
      <Style2 />
      <Style3 />
      <Style4 />
      <StyleScss5 />
      <StyleScss6 />
      <StyledComponent7 />
      <StyledComponent8 />
      <StyleTailwind9 />
      <StyleTailwind10 /> */}
      <hr />

      <h2>useContext</h2>
      {/* <UseContext1 />
      <UseContext2 />
      <UseContext3 />
      <UseContext4 /> */}
      <hr />

      <h2>플러그인 사용하기</h2>
      {/* <Marquee1 />
      <SwiperTest2 />
      <SwiperImg3 />
      <AddressSearch /> */}
      <hr />

      <h2>생명주기</h2>
      {/* <UseEffect1 />
      <UseEffect2 />
      <UseEffect3 />
      <UseEffect4 />
      <UseEffect5 /> */}
      <hr />

      <h2>외부 데이터 연동하기</h2>
      <h2>상태관리</h2>
      <p>Redux, Recoil, Zustand</p>

    </>
  )
}

export default App
