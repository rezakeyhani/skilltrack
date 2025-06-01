# 📊 SkillTrack - Full-Stack Skill Management App

SkillTrack is a full-stack web application for tracking and managing professional skills.  
This project includes a **Spring Boot RESTful API** backend and a **Vue 3 + Vite + Tailwind CSS** frontend.  
It was developed by [Reza Keyhani](https://github.com/rezakeyhani) as a portfolio-quality project.

---

## 🚀 Features

- Add, view, and manage tech skills (e.g., Python, Java, Vue.js, etc.)
- REST API built with Spring Boot (Java)
- Frontend built with Vue 3 and Tailwind CSS
- Responsive and modern user interface
- Clean architecture (controller, service, model, repository)
- Axios for API communication
- CORS configured to allow frontend-backend communication

---

## ⚙️ Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | Vue 3, Vite, Tailwind CSS|
| Backend    | Spring Boot (Java)       |
| API        | RESTful endpoints (JSON) |
| Build Tool | Maven                    |
| Styling    | Tailwind CSS             |
| Tools      | Axios, PostCSS, Vite     |

---

## 📁 Project Structure

skilltrack/
├── skilltrack-backend/ # Spring Boot backend application
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/com/example/skilltrack/
│ │ │ │ ├── controller/ # REST controllers (SkillController.java)
│ │ │ │ ├── model/ # Entity classes (Skill.java)
│ │ │ │ ├── repository/ # Data access layer (SkillRepository.java)
│ │ │ │ └── SkillTrackApplication.java
│ │ │ └── resources/
│ │ │ └── application.properties
│ └── pom.xml
│
├── skilltrack-frontend/ # Vue 3 + Vite frontend application
│ ├── src/
│ │ ├── components/ # Vue components (SkillForm.vue, SkillList.vue)
│ │ ├── api.js # API calls using fetch
│ │ ├── App.vue
│ │ └── main.js
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ ├── package.json
│ └── vite.config.js
│
└── README.md # Project documentation

