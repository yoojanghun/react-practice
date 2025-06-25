// map(): 원본 배열의 각 요소에 대해 콜백 함수를 실행한 결과로 새로운 배열을 반환
function List() {
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return (<ol>{listItems}</ol>);
}

export default List