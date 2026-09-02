import Footer from './components/Footer'
import Header from './components/Header'
import StudentCard from './StudentCard'
import { useState } from 'react'


function App() {
  const studentdata = [{
    name: "John",
    age: 20,
    course: "CSE",
    grade:"B"
  }, {
    name: "Dileep",
    age: 20,
    course: "CSE",
    grade: "A"
    }, {
    name: "Vishal",
    age: 20,
    course: "CSE",
    grade: "B"
    }]
  const[show,setShow]=useState(true)
  function toggleCard() {
 setShow(!show)
}
  return (
    <>
      <Header />
      <button onClick={toggleCard}>Hide/Show</button>
      {show && <StudentCard studentdata={studentdata} />}
      <Footer/>
    </>
    
  )
}

export default App
