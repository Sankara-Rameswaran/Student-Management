# 🎓 Student Management System

A **Full Stack Mini Project** developed to practice and demonstrate my learning in **Spring Boot and REST API development**.

This application performs complete **CRUD operations (Create, Read, Update, Delete)** on student records by integrating a React frontend with a Spring Boot backend.

The goal of this project is to understand how frontend and backend communicate in real-world applications using APIs.

---

## 🚀 Features

* Add new student
* View all students
* Search student by Roll Number
* Update student details
* Delete student record
* Proper error handling (Student not found / Server error)
* RESTful API communication

---

## 🧠 What I Learned From This Project

This project was built while learning **Spring Boot**, and helped me understand:

* How REST APIs work
* HTTP methods (GET, POST, PUT, DELETE)
* ResponseEntity and status codes
* React ↔ Backend communication using Axios
* JSON data mapping
* Handling errors in frontend
* Full CRUD workflow in real applications

---

## 🛠 Tech Stack

### Frontend

* React JS
* Tailwind CSS
* Axios
* React Router

### Backend

* Spring Boot
* Spring Data JPA
* Hibernate
* REST Controller

### Database

* Postgresql

---

## 🔗 API Endpoints

| Method | Endpoint             | Description                |
| ------ | -------------------- | -------------------------- |
| GET    | `/api/students`      | Get all students           |
| GET    | `/api/students/{id}` | Get student by roll number |
| POST   | `/api/students`      | Add new student            |
| PUT    | `/api/students/{id}` | Update student             |
| DELETE | `/api/students/{id}` | Delete student             |

---

## ⚙️ How to Run the Project

### Backend (Spring Boot)

1. Open project in IntelliJ / Eclipse
2. Configure database in `application.properties`
3. Run Spring Boot application

Server runs at:

```
http://localhost:8080
```

---

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

Runs at:

```
http://localhost:3000
```

---

## 📌 Purpose of This Project

This is a practice project created to apply and demonstrate my understanding of **Spring Boot backend development along with React frontend integration**.

---

## 👨‍💻 Author

**Sankar Rameswaran**

Learning Full Stack Development
Interested in Frontend & SDET roles

---
