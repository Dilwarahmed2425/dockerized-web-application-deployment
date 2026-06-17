# 🚀 Dockerized Web Application Deployment (DevOps Project)

## 📌 Project Overview
This project demonstrates a full-stack web application deployed using Docker, Docker Compose, and AWS EC2. It follows a production-style architecture using Nginx as a reverse proxy.

---

## 🏗️ Architecture

             Browser
                │
                ▼
    ┌─────────────────────┐
    │   Nginx Proxy       │  (Port 80)
    └─────────────────────┘
          │         │
          │         │
  /       │         │   /api
          ▼         ▼
 Frontend (Nginx)  Backend (Node.js/Express)
 Port 80           Port 5000 (internal)



---

## ⚙️ Tech Stack

- Docker
- Docker Compose
- Node.js (Express)
- Nginx
- AWS EC2 (Linux)
- Git & GitHub

---

## ✨ Features

- Containerized frontend and backend applications
- Multi-container orchestration using Docker Compose
- Reverse proxy using Nginx
- Internal Docker networking between services
- REST API routing via `/api`
- Health check endpoint for backend
- Deployed on AWS EC2 instance
- Production-style architecture simulation

---

## 🚀 How to Run the Project

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd dockerized-web-application-deployment
