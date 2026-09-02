import React from 'react'
function StudentCard({ studentdata }) {
  console.log(studentdata)
  return (
    <div>
      {studentdata.map((std,index) => (
        <div key={index}>
          <h4>{std.name}</h4>
          <p>{std.age}</p>
          <p>{std.course}</p>
          <p>{std.grade}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default StudentCard