# SADo - Simple Todo App

A modern todo application built with Next.js, Express, and MongoDB. This project serves as an example software for the course, demonstrating the application of the concepts learned throughout the curriculum.


## Course Background

📖 **Course Introduction and Four-Week Outline**

This course covers the core technologies for mastering information system development, from foundational concepts to practical deployment. The curriculum includes version control, automated testing, cloud deployment, database selection, and API design. Through project implementation and a Hackathon, students will experience the complete development process, fostering teamwork and practical skills.

📅 **Course Outline:**

🔹 **Week 11:** Version Control, Frontend and Backend Basics, and Automated Testing  
Learn Git/GitHub for version control and collaboration, CI/CD (GitHub Actions), and automated testing (Playwright/Postman). Using the Todo App as an example, students will engage in frontend and backend development to understand the development workflow.

🔹 **Week 12:** Practical Cloud Deployment  
Understand Docker, Docker Compose, and SSH for remote deployment. Learn how to deploy applications to cloud environments and conduct practical tests.

🔹 **Week 13:** Database Design and API Development  
Understand the differences between SQL and NoSQL, establish databases, learn OpenAPI standards, and write API documentation to enhance frontend and backend collaboration efficiency.

🔹 **Week 14:** Project Implementation and Presentation (Hackathon)  
Integrate the knowledge from the previous three weeks to develop and deploy a Flash Card App, from requirement planning to programming development and cloud deployment, culminating in a final presentation and exchange of results.

## Features

- ✨ Modern UI with shadcn/ui components
- 🔄 Real-time updates with server components
- 📱 Responsive design
- 🎯 TypeScript for type safety
- 🗃️ MongoDB for data persistence
- 🔄 In-memory fallback available

## Tech Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-black?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-black?style=for-the-badge&logo=shadcn&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-black?style=for-the-badge&logo=axios&logoColor=white)

### Frontend
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Axios for API calls

### Backend
- Express.js
- MongoDB
- TypeScript

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/sado.git
cd sado
```

2. Install dependencies

At the root of the project, run:
```bash
npm run install-all
```

3. Set up environment variables

Frontend (.env.local):
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Backend (.env):
```env
PORT=3001
MONGO_URL=your_mongodb_url
DB_NAME=sado
USE_MONGO=true # Set this to true to connect to MongoDB and false to use in-memory fallback
```

4. Start the development servers

At the root of the project, run:
```bash
npm run dev
```

The app will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
