// map(): 원본 배열의 각 요소에 대해 콜백 함수를 실행한 결과로 새로운 배열을 반환
// sort(): 배열 정렬 함수. 배열 요소들을 원본 배열 자체에서 정렬함 (원본 배열 변경됨)
// filter(): 배열에서 특정 조건을 만족하는 요소들만 골라내서 새로운 배열로 반환하는 메서드

import PropTypes from 'prop-types'

function List(props) {
    
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return (<>
                <h3 className="list-category">{category}</h3> 
                <ol className="list-items">{listItems}</ol>
            </> );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                            name: PropTypes.string, 
                                            calories: PropTypes.number}))
}

export default List

// 리액트에서 .map()으로 어떤 요소를 반복 렌더링할 때, 각 요소를 고유하게 구분할 수 있는 key값을 줘야 함.
// 위의 예시처럼 과일의 이름이 겹치지 않는다면 fruit.name으로 key값을 줄 수 있다. 아니면 id를 만든다.