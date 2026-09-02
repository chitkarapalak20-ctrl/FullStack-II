import React from 'react'
import { useState } from 'react'
import StudentCard from './StudentCard'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  const studentdata = [{
    name: "John Doe",
    age: 20,
    course: "Computer Science",
    grade: "A"
  },
  {
    name: "Jane Smith",
    age: 22,
    course: "Mathematics",
    grade: "B"
  },
  {
    name: "Michael Johnson",
    age: 21,
    course: "Physics",
    grade: "A"
  }]
 
 
 
 
  const [show, setShow] = useState(true)
  
  function toggleCard(x) {
    console.log(x)
   setShow(!show)
   
} 
  return (
    <div>
      <Header />
      <button onClick={toggleCard}>Show/Hide</button>
      {show && <StudentCard studentdata={studentdata} />}
      <Footer/>
    </div>
  )
}

export default App