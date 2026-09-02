import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true)
  const [searchUsers, setSearchUsers] = useState([])
  const [name, setName] = useState('')
  useEffect(() => {

    async function fetchUsers() {
      try {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
          throw new Error("Failed to Fetch the Data")
        }
        console.log(response)
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setSearchUsers(data);
        setLoading(false)
      }
      catch (err) {
        console.log(err.message);
        setError(true);
        setMessage(err.message)
      }
    }
    fetchUsers();
  }, [])
  function handleSearch(e) {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  return (
    <>
      <div>{loading && <h5>Loading ....</h5>}</div>


      <input type='text' placeholder='Search Name ..' value={name} onChange={handleSearch} />
      {searchUsers.map((user, index) => (
        <div key={index}>
          <h4>{user.name}</h4>
          <p>{user.address.street}</p>
          <p>{user.address.geo.lat}</p>
        </div>
      ))}

      {error && <div>OPS! {message}</div>}
    </>
  )
}

export default App
