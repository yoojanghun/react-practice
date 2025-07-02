// updater function = 보통 setState()에 인자로 넘기는 함수
//                    ex. setYear(year + 1) 대신 setYear(updater function)
//                    이 방법은 "이전 상태"를 기반으로 안전하게 업데이트할 수 있게 해줌
//                    여러 번 상태 업데이트하거나 비동기 함수 안에서 쓸 때 좋음
//                    업데이트 함수 사용은 좋은 습관이다! 
//                    (특히 상태 값이 이전 상태에 의존하는 경우엔 반드시 추천)

// 기존의 방식에선 현재 상태를 사용해서 다음 상태를 계산한다
// set 함수 자체가 즉시 리렌더링을 발생시키지 않는다
// React는 성능 향상을 위해 여러 상태 업데이트를 한 번에 묶어서 처리한다
// 업데이트가 끝난 후에는 '다음 상태'가 '현재 상태'가 된다

// updater function을 사용하면
// React는 아직 화면에 적용되진 않았지만 이미 큐에 올라간 
// "대기 중인 상태들"(pending)을 기준으로 업데이트 순서에 맞게 계산
// React는 네가 작성한 updater 함수들을 큐(대기열)에 넣는다
// 다음 렌더링 때, 그 함수들을 같은 순서대로 호출한다

import { useState } from "react";

function Updater() {

    const [count, setCount] = useState(0);

    // count 값을 직접 참조했기 때문에 3번 호출해도 1번만 적용됨 
    // React의 Batching 최적화 때문에
    function incrementBtn() {
        setCount(count + 1);    // => setCount(0 + 1)
        setCount(count + 1);    // => setCount(0 + 1)
        setCount(count + 1);    // => setCount(0 + 1)
    }

    // 업데이트 함수(prev => prev + 1)는 "매번 가장 최신 상태"**를 
    // React가 알아서 넣어줌.
    function incrementUpdaterBtn() {
        setCount(c => c + 1);    
        setCount(c => c + 1);    
        setCount(c => c + 1);    
    }

    function resetBtn() {
        setCount(0);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementBtn}>Increment</button> <br /><br />
            <button onClick={incrementUpdaterBtn}>Increment Updater</button> <br /><br />
            <button onClick={resetBtn}>Reset</button>
        </div>
    );
}

export default Updater;