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
      name: "John Doe",
      age: 20,
      course: "Computer Science",
      age: 20,
    },
    {
      name: "Jane Smith",
      age: 22,
      course: "Mathematics",
      age: 22,
    },
    {
      name: "Michael Johnson",
      age: 21,
      course: "Physics",
      age: 21,
    },
  ]
  let [showCard, setShowCard] = useState(true);
  // function toggleStudentCard() {
  
  //   setShowCard(!showCard);
  // }
  return (
    <>
      <Header />
      <button onClick={()=>setShowCard(!showCard)} style={{ width: '100px' }}  >Show/hide</button>
      {showCard && <StudentCard studentdata={studentdata} />}
      <Footer />
    </>
  )
}

export default App
