// React에서 useState를 통해 상태(state)가 바뀌면 
// 해당 컴포넌트 함수 전체가 다시 호출(렌더링)된다.

// 또한 부모 컴포넌트가 다시 렌더링되면, 
// 자식 컴포넌트들도 props가 바뀌지 않아도 다시 렌더링 될 수 있다.

// 이렇게 자주 렌더링 될 때, 불필요한 계산을 필하기 위해 
// 결과를 기억(memorize)하는 훅이 필요하다.
// 컴포넌트가 다시 렌더링될 때마다 무거운 연산을 반복하지 않게 한다.

// a와 b가 바뀔 때에만 computeexpensiveComputing(a, b)를 실행하고 
// 안 바뀌면 이전에 계산한 값을 재사용한다.
// const memoizedValue = useMemo(() => {
//   return computeexpensiveComputing(a, b);
// }, [a, b]);

import { useState, useMemo } from "react";

function UseMemo() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveComputing = useMemo(() => {
    console.log("무거운 계산 실행");
    let total = 0;
    for(let i = 0; i < 1e9; i++) {
      total += i;
    }
    return total;
  }, []);

  // 위에서 useMemo를 쓰면 expensiveComputing에 total의 값이 들어간다.
  return (
    <div>
      <p>무거운 계산 결과: {expensiveComputing}</p>
      <p>카운트: {count}</p>
      <button onClick={() => {setCount(count + 1)}}>+1</button>
      <input type="text" value={text} onChange={e => setText(e.target.value)}/>
    </div>
  )
}

export default UseMemo;

// 만약 위에서 useMemo를 쓰지 않는다면 setCount, setText 안의 값이 바뀔 때마다
// for문을 1e9번씩 계속 돌게 될 것이다.
// 따라서 엄청난 렉이 걸림

// 참고로 useEffect가 실행된다고 해서 컴포넌트 함수가 다시 렌더링되진 않음
// 반대로, 컴포넌트가 렌더링되면 그 이후에 useEffect가 실행된다.
// useEffect: 렌더링이 끝난 후 실행되는 이펙트 훅

// useRef 또한 값이 바뀌어도 컴포넌트를 다시 렌더링하지 않는다.
// useRef는 렌더링과 무관한 "변수 저장소"처럼 쓰인다.
// 또는 DOM요소에 ref={}를 달아 HTML 요소를 조작하거나 접근할 수 있다.