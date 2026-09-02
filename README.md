# Fullstack Development – II (MERN Stack)
**Course Code:** 24CSP-304 / 24ITP-304 | **Semester:** 5th | **Course Coordinator:** Er. Tushar Sood

This repository contains hands-on lab experiments for the **Fullstack Development – II** course, built using the **MERN stack** (MongoDB, Express.js, React, Node.js). Each experiment progresses through **Easy → Medium → Hard** difficulty levels, covering everything from React fundamentals to full-stack deployment.

---

## 📖 Course Description

A project-based course focused on building end-to-end web applications — integrating a React frontend, an Express/Node.js backend, and a MongoDB database — covering UI design through cloud deployment.

## 🎯 Course Objectives

- Develop responsive frontend applications using **React.js, HTML5, CSS**
- Implement RESTful APIs with **Express.js (Node.js)** and integrate with **MongoDB**
- Apply JavaScript/TypeScript principles for backend development
- Understand full-stack architecture: authentication (JWT), state management (Redux), microservices
- Deploy applications using **Docker** and cloud platforms (**AWS/Heroku**)

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js (Vite), HTML5, CSS, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcrypt |
| Tools | Postman, MongoDB Compass/Atlas, Docker |

---

## 🧪 Lab Experiments

### Unit 1: React.js Frontend Development

#### Experiment 1 — React Components & JSX
- **Easy:** Vite React app with a functional component rendering a student profile card (name, course, age) using JSX.
- **Medium:** Reusable `StudentCard` component accepting props (name, age, course, grade); render 5 students via `.map()` with unique keys.
- **Hard:** Multi-section academic dashboard with nested components (Header, Sidebar, StudentList, Footer), props drilling, and conditional rendering.

#### Experiment 2 — React State & Hooks (`useState`, `useEffect`)
- **Easy:** Counter app with increment/decrement/reset using `useState`; live count with conditional styling for negative values.
- **Medium:** Controlled student registration form (name, email, course, age) with two-way binding; display submitted data without page reload.
- **Hard:** Student data table fetching from a public REST API (JSONPlaceholder) via `useEffect`, with loading spinner, error handling, and live search filtering.

#### Experiment 3 — React Router & Single Page Application (SPA)
- **Easy:** React Router with Home, About, Contact pages navigated via a Navbar (`<Link>`).
- **Medium:** Student directory SPA — routes for `/students`, `/students/:id`, `/add`; route params for individual profiles.
- **Hard:** Multi-page admin SPA with protected routes (login required), dashboard with stats, nested routing, and a 404 page.

#### Experiment 4 — Student Management System
- **Easy:** Basic React app displaying student records.
- **Medium:** Enhanced React app with advanced frontend logic and interactivity.
- **Hard:** Complete React-based Student Management System with advanced frontend features.

---

### Unit 2: Node.js & Express.js Backend

#### Experiment 5 — Node.js Environment & HTTP Server
- **Easy:** Basic HTTP server on port 3000 returning "Hello World"; serve a text file via the `fs` module.
- **Medium:** Node.js CLI tool for arithmetic operations via command-line args; custom `mathUtils` module (add, subtract, multiply, divide).
- **Hard:** Static file server serving HTML/CSS/images from `/public` with correct MIME types and 404 handling.

#### Experiment 6 — Express.js REST API with Routing & Middleware
- **Easy:** Express server with GET routes for `/`, `/about`, `/api/students`; tested via Postman.
- **Medium:** Full CRUD REST API for `/api/students` (in-memory array) — GET all, GET by ID, POST, PUT, DELETE with proper status codes.
- **Hard:** API extended with custom logger middleware, request validation middleware, and a global 4-parameter error handler.

#### Experiment 7 — Authentication with JWT & bcrypt
- **Easy:** Script to hash/verify a password with bcrypt and generate/decode a JWT.
- **Medium:** Express routes for `POST /api/register` and `POST /api/login` (hash password, verify, return JWT); tested in Postman.
- **Hard:** Full auth system — register/login, `verifyToken` middleware, token expiry handling, protected `GET /api/profile`.

---

### Unit 3: MongoDB & Full Stack Integration

#### Experiment 8 — MongoDB & Mongoose: Schema Design & CRUD
- **Easy:** Connect Node.js to MongoDB via Mongoose; define a Student schema (name, age, email, course); save and verify a document.
- **Medium:** Field validations (required, minlength, enum); full CRUD using `async/await`.
- **Hard:** Schema referencing a Course model with `.populate()`; filtering by course, regex search, sorting, and pagination (`.limit()`, `.skip()`).

#### Experiment 9 — Full Stack: React Frontend + Express + MongoDB
- **Easy:** Connect React frontend to Express backend via `fetch()`; enable CORS; display all students from `GET /api/students`.
- **Medium:** React form that POSTs a new student to MongoDB; delete button calling `DELETE /api/students/:id`.
- **Hard:** Complete full-stack CRUD UI — add (POST), edit inline/via modal (PUT), delete (DELETE), live search, real-time UI sync.

#### Experiment 10 — Lab Based Mini Project
End-to-end MERN application integrating all concepts from Experiments 1–9.

---

## 📊 Course Outcomes (COs)

| CO | Description | BT Level |
|---|---|---|
| CO1 | Understand React.js architecture — component lifecycle, props, state, hooks | BT2 – Understand |
| CO2 | Develop RESTful APIs using Node.js & Express.js with routing, middleware, validation | BT3 – Apply |
| CO3 | Implement MongoDB schemas with Mongoose and perform full CRUD via REST API | BT3 – Apply |
| CO4 | Integrate React frontend with Express + MongoDB backend into a full MERN app | BT4 – Analyze |
| CO5 | Evaluate & implement secure auth (JWT, bcrypt); assess performance; deploy to cloud | BT5 – Evaluate |

---

## 📚 Self-Study Topics for Advanced Learners

- Microservices with Express.js
- GraphQL APIs (Apollo Server + React)
- Serverless deployment (AWS Lambda)
- React Native integration
- Next.js Server-Side Rendering
- Progressive Web Applications (PWA)
- Redux Toolkit State Management
- React Hooks & Context API

---

## 📘 Textbooks & References

**Textbooks**
- *Beginner MERN Stack Developer* — Greg Lim, Independently Published, 2021
- *Web Development with Node and Express* — Ethan Brown, 2nd Edition, O'Reilly Media, 2019

**Reference Books**
- *Pro MERN Stack* — Vasan Subramanian, 1st Edition, Apress, 2019
- *Express in Action* — Evan Hahn, Manning Publication, 1st Edition, 2016
- *MongoDB: The Definitive Guide* — Kristina Chodorow, 3rd Edition, O'Reilly Media, 2019

---

## 📈 Assessment Pattern

| Component | Continuous Assessment | Semester End Exam (SEE) | Total |
|---|---|---|---|
| Practical/Lab | 60 | 40 | 100 |

**Evaluation Breakdown:**
| Instrument | Weightage | Frequency | Final Weightage |
|---|---|---|---|
| Worksheet | 30 marks/experiment | 10 experiments | 45 |
| Exam (MST) | 15 marks | 1/semester | 15 |
| External Practical | 40 marks | 1/semester | 40 |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd fullstack-development-ii

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Run backend (from /backend)
npx nodemon index.js

# Run frontend (from /frontend)
npm run dev
```



---

## 👤 Course Coordinator
**Er. Tushar Sood**

*Chandigarh University — Program Codes: CS201, CS202, CS703, CS704, IT201, IT202*
