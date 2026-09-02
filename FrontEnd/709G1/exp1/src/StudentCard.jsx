import React from 'react'

function StudentCard({ studentdata }) {
  console.log(studentdata);
  return (
    <div>
      <p>Student Details ....</p>
      <hr />
      <hr /> 
      {
        studentdata.map((std,index) => (
          <div key={index}>
            <p>Name:{std.name}</p>
            <p>Age: {std.age}</p>
            <p> Course:{std.course}</p>
            <p>Grade:{std.grade}</p>
            <hr />
          </div>
        )

        )}

    </div>
  )
}

export default StudentCard