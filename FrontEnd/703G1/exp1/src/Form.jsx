import { useState } from "react";

function StudentRegistration() {
    // Current form data
    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: "",
        age: "",
    });

    // Array to store all students
    const [data, setData] = useState([]);

    // Handle input changes
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value   );
        const { name, value } = e.target;

        setStudent({
            ...student,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Add current student to array
        setData([...data, student]);

        // Clear the form
        setStudent({
            name: "",
            email: "",
            course: "",
            age: "",
        });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Student Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Email:</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Course:</label>
                    <br />
                    <input
                        type="text"
                        name="course"
                        value={student.course}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Age:</label>
                    <br />
                    <input
                        type="number"
                        name="age"
                        value={student.age}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <button type="submit">Register</button>
            </form>

            <hr />

            <h2>Registered Students</h2>

            {data.map((item, index) => (
                <div key={index}>
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>Course:</strong> {item.course}</p>
                    <p><strong>Age:</strong> {item.age}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default StudentRegistration;