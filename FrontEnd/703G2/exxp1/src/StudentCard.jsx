import React from 'react'

function StudentCard({ studentdata , value }) {
  console.log(studentdata);
  return (
    <div>
      <h3>Student Details</h3>
      <hr />
      <hr />
      {studentdata.map((std,index) => (
     <div key={index}>
          <p>Name: {std.name}</p>
          <p>Age: {std.age}</p>
          <p>Grade: {std.grade}</p>
          <p>Course: {std.course}</p>
          <hr />
     </div>
      )
      )}
    
    
    </div>
  )
}

export default StudentCard

// const person = {
//   name: "John Doe",
//   age: 20,
//   grade: "A",
//   course: "Computer Science"
// }
// const { name, age } = person;
// let arr = [1, 12, 13]
// const[x,y]=arr