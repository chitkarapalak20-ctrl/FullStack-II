import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import StudentCard from './StudentCard'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  const studentdata = [
    {
      name: 'John Doe',
      age: 20,
      course: 'Computer Science',
      grade: 'A',
    },
    {
      name: 'Jane Smith',
      age: 22,
      course: 'Mathematics',
      grade: 'B',
    },
    {
      name: 'Michael Johnson',
      age: 21,
      course: 'Physics',
      grade: 'C',
    },
  ]
  const [show, setShow] = useState(true)
   
  // function toggleCard(x) {
  //   console.log(x);
  //   setShow(!show);
  // }

  return (
    <>
      <Header />
      <button onClick={()=>setShow(!show) } style={{width:"100px"}}    >Show/Hide</button>
      {show && <StudentCard studentdata={studentdata} />}
     <Footer/>
    </>
  )
}

export default App
