// How to STYLE REACT COMPONENTS with CSS
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL: index.css에 직접 CSS 작성 => 프로젝트 커지면 class이름이 많아 헷갈림
// 2. MODULES: 하나의 component를 위한 폴더 만들고 안에 해당 jsx, CSS 파일을 담음, 그리고 css파일에 jsx 파일 연결 => Global style이 적용 안될 수 있음
// 3. INLINE: component의 jsx파일 내부에 style 객체 만듦, return 요소에 style = {styles} 작성 => style이 적게 필요한 요소에 사용, 가독성 낮아짐, 반응형 CSS 등 복잡한 CSS에서 불리

import Button from "./button.jsx"

function App() {
  return(
    <Button></Button>
  );
}


export default App