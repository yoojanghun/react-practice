// useState() = 상태 값이 변경될 때 컴포넌트를 다시 렌더링함.

// useRef()   = "Reference 사용" 값이 변경되어도 컴포넌트를 다시 렌더링하지 않음.
//              컴포넌트가 어떤 정보를 “기억”하길 원하지만,
//              그 정보가 새로운 렌더링을 유발하길 원하지 않을 때 사용.

//              1. DOM 요소에 접근하거나 상호작용할 때
//              2. 포커스, 애니메이션, 트랜지션을 처리할 때
//              3. 타이머 및 인터벌을 관리할 때

import { useState, useEffect, useRef } from "react";

function UseRef() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    
    useEffect(() => {
        console.log("Component Rendered");
    })

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            <button onClick={handleClick1}>
                Click me 1
            </button>
            <input ref={inputRef1} type="text" /> <br />

            <button onClick={handleClick2}>
                Click me 2
            </button>
            <input ref={inputRef2} type="text" /> <br />

            <button onClick={handleClick3}>
                Click me 3
            </button>
            <input ref={inputRef3} type="text" /> <br />
        </div>
    );
}

export default UseRef; 