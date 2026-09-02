import Footer from "./components/Footer";
import Header from "./components/Header";
import StudentCard from "./StudentCard"
import { useState } from "react";


function App() {
  const studentdata = [{
    name: "John Doe",
    age: 20,
    grade: "A",
    course: "Computer Science"
  }, {
    name: "Jane Smith",
    age: 22,
    grade: "B",
    course: "Mathematics"

  }, {
    name: "Bob Johnson",
    age: 21,
    grade: "C",
    course: "Physics"
  }]
  const [showCard, setShowCard] = useState(true);

  function toggleStudentCard() {
    setShowCard(!showCard);
  }
  return (
    <>
      <Header />
      <button onClick={toggleStudentCard}  style={{ margin: "20px", padding: "10px", fontSize: "16px" ,width:"200px" }}>
        Show/Hide
      </button>
      {showCard && <StudentCard studentdata={studentdata} />}
      <Footer />

    </>

  )
}

export default App
