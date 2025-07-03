// useEffect() = React에게 "언제 특정 코드를 실행할지" 알려주는 훅 
//               컴포넌트가 다시 렌더링될 때
//               컴포넌트가 처음 마운트(화면에 처음 나타날 때)될 때 
//               어떤 특정 상태값이 바뀔 때

// useEffect(function, [dependencies])
// function: 실행할 코드
// [dependencies]: 그 코드가 언제 실행될지를 결정하는 값들

// 1. useEffect(() => {})           // 모든 렌더링 후마다 실행
// 2. useEffect(() => {}, [])       // 컴포넌트가 처음 마운트될 때만 1번 실행
// 3. useEffect(() => {}, [value])  // 처음 마운트될 때 1번 실행되고, 이후에 value가 바뀔 때마다 실행

// USES 
// #l 이벤트 리스너 등록 (예: window.addEventListener)
// #2 DOM 조작 (예: 요소에 포커스 주기, 스타일 변경 등)
// #3 실시간 데이터 구독 (예: 웹소켓, Firebase 등) 
// #4 API에서 데이터 불러오기 (fetch, axios 등)
// #5 컴포넌트가 사라질 때 정리 작업 (cleanup, 예: 타이머 정리, 리스너 제거 등)

import { useState, useEffect } from "react";

function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    })

    useEffect(() => {
        document.querySelector("#mount").textContent = `Count: ${count} ${color}`;
    }, [])

    useEffect(() => {
        document.querySelector("#change").textContent = `Count: ${count} ${color}`;
    }, [count])         // count가 변할 때만 update됨

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }
    return (
        <>
            <p>Count : {count}</p>
            <h1 id="mount">Count : {count}</h1>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button> <br />

            <p style={{color: color}}>Count : {count}</p>
            <h1 id="change">Count : {count}</h1>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default UseEffect;