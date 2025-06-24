// How to STYLE REACT COMPONENTS with CSS
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL: index.css에 직접 CSS 작성 => 프로젝트 커지면 class이름이 많아 헷갈림
// 2. MODULES: 하나의 component를 위한 폴더 만들고 안에 해당 jsx, CSS 파일을 담음, 그리고 css파일에 jsx 파일 연결 => Global style이 적용 안될 수 있음
// 3. INLINE: 

import Button from "./Button/button.jsx"

function App() {
  return(
    <Button></Button>
  );
}


export default App