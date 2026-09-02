import React from 'react'

function StudentCard({ studentdata }) {
  console.log("hi");
  console.log(studentdata);
  let a=10
  return (
    <div>
      {studentdata.map((std,index) => (
        
        <div key={index}>
          <h3>{std.name}</h3>
          <p>Age: {std.age}</p>
          <p>Course: {std.course}</p>
        </div>
      ))}


    </div>
  )
}


// let person = {
//   name: "John Doe",
//   age: 20,
// }

// const { name, age } = person;
// let arr = [1, 2, 3, 4, 5];
// const [x, ...y] = arr;




export default StudentCard