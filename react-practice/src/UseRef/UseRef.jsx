// useState() = 상태 값이 변경될 때 컴포넌트를 다시 렌더링함.

// useRef()   = "Reference 사용" 값이 변경되어도 컴포넌트를 다시 렌더링하지 않음.
//              컴포넌트가 어떤 정보를 “기억”하길 원하지만,
//              그 정보가 새로운 렌더링을 유발하길 원하지 않을 때 사용.

//              1. DOM 요소에 접근하거나 상호작용할 때
//              2. 포커스, 애니메이션, 트랜지션을 처리할 때
//              3. 타이머 및 인터벌을 관리할 때

import { useState, useEffect, useRef } from "react";

function UseRef() {

    const ref = useRef(0);      // ref에는 current라는 속성을 가진 객체가 전달된다
                                // ref를 사용하면 다시 렌더링되지 않기 때문에 useEffect에서 console.log는 한 번만 적용됨
                                // (strict 모드가 없을 때)

    useEffect(() => {
        console.log("Component Rendered");
    })

    function handleClick() {
        ref.current++;
        console.log(ref.current);
    }

    return(
        <div>
            <button onClick={handleClick}>
                Click me!!
            </button>
            <input type="text" />
        </div>
    );
}

export default UseRef; 