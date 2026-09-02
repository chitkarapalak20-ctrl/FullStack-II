import React from 'react'


function StudentCard({ studentdata }) {
    console.log(studentdata)
    return (
        <div>
            <h1>Student Details</h1>
            <h1>SuhaibKhan7 -Github</h1> 
            <hr />
            <hr/>
            {studentdata.map((std,index) => (
                <div key={index}>
                    <p>{std.name}</p>
                    <p>{std.age}</p>
                    <p>{std.grade}</p>
                    <p>{std.course}</p>
                <hr/>
                </div>
                
            )                       

)}





        </div>
    )
}

export default StudentCard