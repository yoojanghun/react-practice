import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"

function App() {

  return (
    <>
      <Header />
      <Food />
      <Footer />
    </>
  )
}

// return엔 하나의 요소만 return할 수 있으므로 위와 같은 꼼수를 쓴다.
// 위와 같이 요소들을 하나의 파일로 만들고 그것들을 reuse할 수 있다.
// 요소가 담긴 파일들은 javascript + HTML (.jsx)

export default App