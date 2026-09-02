import React, { useState, useEffect } from 'react'
import { use } from 'react'

function App() {
  const [user, setUser] = useState([])
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setloading] = useState(false)
  useEffect(() => {
    async function fetchUsers() {
      try {
        setloading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/user')
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
        console.log(data);
        setloading(false)
      }
      catch (error) {
        console.log(error.message);
        setError(true);
        setMessage(error.message)
        setloading(false)
      }

    }
    fetchUsers()
  }, [])
  return (
    <div>

      {loading && <h3>Loading....</h3>}

      {error ? <h3>{message}</h3> : <div>
        <h1>UserDetails</h1>
        {
          user.map((usr) => (
            <div>
              <h2>{usr.name}</h2>
              <p>{usr.address.city}</p>
              <p>{usr.address.geo.lat}||{usr.address.geo.lng}</p>
            </div>
          ))
        }
      </div>
      }
    </div>
  )
}

export default App