# Smart Task Manager - Microservices Project

This is a **Smart Task Manager** project built with a **Microservice Architecture**. It includes multiple services such as **Eureka Server**, **API Gateway**, **Auth Service**, **Task Service**, and **Notification Service**, each designed to work independently and interact with each other. The project aims to manage tasks, authentication, and notifications efficiently in a scalable environment.

---

## 🚀 Tech Stack

- **Backend**:  
  - **Spring Boot** (Java)  
  - **Node.js** (JavaScript)  
  - **MongoDB**  
  - **JWT (JSON Web Tokens)**  
  - **RabbitMQ** (for Notification Service)  
  - **Eureka Server** (for service discovery)
  - 

- **Communication**:  
  - **REST APIs**  
  - **AMQP** (Advanced Message Queuing Protocol) for messaging between services.

---

## 🔧 Services & Tech Stack

### 1. **Eureka Server**  
**Tech Stack**:  
- **Spring Boot**  
- **Eureka Server**  
- **Java**  
- **Port**: `8761`  

**Purpose**:  
The Eureka Server is a **service registry** that allows microservices to discover and interact with each other. All microservices register themselves with the Eureka Server, enabling them to communicate without hardcoded IPs or URLs.

### 2. **API Gateway**  
**Tech Stack**:  
- **Spring Boot**  
- **Java**  
- **Port**: `8080`  

**Purpose**:  
The API Gateway acts as the entry point for all client requests. It handles routing, load balancing, and security for requests to the various microservices.

### 3. **Auth Service**  
**Tech Stack**:  
- **Node.js**  
- **Express**  
- **MongoDB**  
- **JWT (JSON Web Tokens)**  
- **Port**: `3000`  

**Purpose**:  
The Auth Service handles user authentication and authorization. It verifies user credentials, generates JWT tokens, and protects APIs from unauthorized access.

### 4. **Task Service**  
**Tech Stack**:  
- **Spring Boot**  
- **MongoDB**  
- **Java**  
- **Port**: `8082`  

**Purpose**:  
The Task Service handles CRUD operations for tasks. Users can create, update, and delete tasks. It stores task-related data in MongoDB and communicates with the Notification Service to send notifications about tasks.

### 5. **Notification Service**  
**Tech Stack**:  
- **Spring Boot**  
- **RabbitMQ**   
- **Java**  
- **Port**: `8083`  

**Purpose**:  
The Notification Service listens to task-related events (like task creation, updates, and deadlines) and sends notifications to users via multiple channels (Email, SMS, etc.). It uses a message broker (RabbitMQ or Kafka) to receive task events and trigger notifications.

---

## ⚡ Features

- **Microservice Architecture**: The system is divided into independent services, each responsible for a specific business function.
- **Service Discovery**: Uses **Eureka** for dynamic service registration and discovery.
- **Authentication**: Provides **JWT-based authentication** to secure API endpoints.
- **Task Management**: Allows CRUD operations on tasks and tracks task statuses.
- **Notifications**: Sends real-time notifications to users via different channels (SMS, Email, Push).
- **Scalability**: The microservices can scale independently to handle growing loads.

---

## 🛠️ Setup and Installation

1. **Clone the repository**:
   ```bash
   https://github.com/SithiraRoneth/SmartTask-MicroService.git



