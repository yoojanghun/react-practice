// map(): 원본 배열의 각 요소에 대해 콜백 함수를 실행한 결과로 새로운 배열을 반환
// sort(): 배열 정렬 함수. 배열 요소들을 원본 배열 자체에서 정렬함 (원본 배열 변경됨)

function List() {
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name));     알파벳 순서
    // fruits.sort((a, b) => b.name.localeCompare(a.name));     알파벳 반대 순서
    // fruits.sort((a, b) => a.calories - b.calories);          오름차순 
    // fruits.sort((a, b) => b.calories - a.calories);          내림차순    


    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);

    return (<ol>{listItems}</ol>);
}

export default List

// 리액트에서 .map()으로 어떤 요소를 반복 렌더링할 때, 각 요소를 고유하게 구분할 수 있는 key값을 줘야 함.
// 위의 예시처럼 과일의 이름이 겹치지 않는다면 fruit.name으로 key값을 줄 수 있다. 아니면 id를 만든다.