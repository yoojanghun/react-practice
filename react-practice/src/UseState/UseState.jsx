// React Hook = 함수형 컴포넌트에서 클래스 컴포넌트를 작성하지 않고도
//              React의 기능들을 사용할 수 있게 해주는 특별한 함수
//              (useState, useEffect, useContext, useReducer, useCallback 등)

// useState() = 상태(state) 변수를 만들 수 있게 해주는 React Hook
//              해당 변수의 값을 업데이트할 수 있는 setter 함수도 함께 제공됨
//              가상 DOM에서 이 값이 변경될 때 컴포넌트가 다시 렌더링됨
//              [name, setName] 형태로 사용

// react 라이브러리 안에는 여러 기능(Hook, 컴포넌트 등등)들이 들어 있는데, useState라는 함수를 가져다 씀
// 함수형 컴포넌트에서 state(상태)를 만들기 위해 필요
import {useState} from "react"

function UseState() {

    // destructuring
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployeed, setIsEmployeed] = useState(false);

    const updateName = () => {
        setName("SpongeBob");
    }
    // name = "SpongeBob" 이라고 하면 화면에서 update가 안 됨
    const incrementAge = () => {
        setAge(age + 1);
    }
    const toggleEmployeedStatus = () => {
        setIsEmployeed(!isEmployeed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is Employeed: {isEmployeed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployeedStatus}>Toggle Status</button>
        </div>
    )
}

export default UseState;