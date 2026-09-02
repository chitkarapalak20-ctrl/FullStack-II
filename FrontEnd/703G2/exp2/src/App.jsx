import { useState, useEffect } from "react"
function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setMessage(error.message);
        setLoading(false);
      }  
    } 
    fetchUsers();
  }, [])
  return (
    <>
      {error && <h4>{message}</h4>}
      {loading && <h4>Loading...</h4>}

      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <h6>{user.address.city}</h6>
          <p>{user.address.geo.lat}</p>
          <p>{user.address.geo.lng}</p>
        </div>
      ))}
    </>
  )
}

export default App
