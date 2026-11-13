import { Component } from "react";

class ClassComponent1 extends Component{
    render(){
        return(
            <div>
                <h2>클래스 컴포넌트</h2>
                <p>화면에 뿌려질 내용은 반드시 render안에 넣어야한다</p>
                <p>render 안에는 return 하나 필수</p>
                <p>return 안에는 jsx 문법을 사용하기 위해서 전체를 묶어주는 태그가 필수</p>
                {/*  <div></div>, <Fragment></Fragment>, <></>  */}
            </div>
        )
    }
}
export default ClassComponent1;