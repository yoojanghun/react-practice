// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />


// propTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: PropTypes.number


// 아래처럼 name 속성을 설정하면 Student.jsx에서 props 변수에 name(SpongeBob)이 저장됨
import Student from "./Student.jsx";

function App() {
  return(
    <>
      <Student name="SpongeBob" age={30} isStudent={true}></Student>
      <Student name="Patric" age={42} isStudent={false}></Student>
      <Student name="SquidWard" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>
    </>
  );
}


export default App