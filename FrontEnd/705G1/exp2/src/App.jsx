import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  
  
  useEffect(() => {
    async function fetchUsers() {

      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error("Failed to Fetch Data ...")
        }
        console.log(response)
        const data = await response.json()
        console.log(data)
        setData(data)
        setLoading(false)
        
      } catch (error) { 
        console.log(error.message)
        setError(true)
        setMessage(error.message)
        setLoading(false)

      }

      
    }
    fetchUsers();
  }, [])
  return (
    <div>
      {error && <h1>{message}</h1>}
      {loading&&<h1>Loading ...</h1>}

      {data.map((usr,index) => (
        <div key={index}>
          <h3>{usr.name} </h3>
          <p>{usr.email}</p>
          <p>{usr.address.street}</p>
          <p>{ usr.address.geo.lat}</p>
        </div>

      ))}
    </div>
  )
}

export default App