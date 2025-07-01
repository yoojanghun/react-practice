// Click Event = An interaction when a user Clicks on a specific element
//               We can respond to clicks by passing 
//               a callback to the onClick event handler.

import imgUrl from "../assets/guy.jpg";

// click event에서의 함수는 자동으로 event 객체를 매개변수로 받는다
// event객체엔 일어난 이벤트에 대한 정보를 담고 있다.
function Button() {

    const handleClick = (e) => {
        console.log("OUCH!!");
    }
    
    let count = 0;

    const handleClick2 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} stop clicked me ${count} times`);
        }
        else {
            console.log(`${name} stop clicking me!!`)
        }
    }

    const handleClick3 = (e) => e.target.textContent = "Ouch!!";

    const hideGuy = (e) => e.target.style.display = "none";

    return(
        <>
            <button onClick={handleClick}>Click Me!!</button>
            <button onClick={() => {handleClick2("Janghun")}}>Click Me!!</button>
            <button onClick={(e) => {handleClick3(e)}}>Click Me!!</button>
            <button onDoubleClick={(e) => {handleClick3(e)}}>Click Me!!</button>
            <img onClick={(e) => hideGuy(e)} width="300" src={imgUrl} alt="guy" />
        </>
    );
}

// onClick={handleClick2("Janghun")} 라고 괄호를 써 버리면, 함수를 바로 호출해 버린다.

export default Button