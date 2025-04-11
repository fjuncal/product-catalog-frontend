# Product Catalog Application

This project is a full-stack application that demonstrates a simple e-commerce product catalog. The backend is built using Java 17 and Spring Boot, while the frontend is developed using React with TypeScript and Tailwind CSS. The application includes authentication (with JWT), data validation, error handling, and interactive API documentation via Swagger.

## Overview

The Product Catalog Application is designed as an assessment project to showcase full-stack development skills. The backend API supports basic CRUD operations on products and categories, and provides endpoints for user registration and authentication. The React frontend communicates with the backend (or uses a mock API) and offers a responsive, modern user interface.

## Features

- **Backend API (Java & Spring Boot)** <https://github.com/fjuncal/product-catalog>

  - RESTful endpoints for products, categories, and authentication.
  - Data validation and global error handling.
  - JWT-based authentication for secure access.
  - API documentation available via Swagger.

- **Frontend (React & Tailwind CSS)**
  - Responsive single-page application built with React and Vite.
  - Pages for Home, Login, Register, Products, and Categories.
  - A clean, modern design using Tailwind CSS.
  - Protected routes that require authentication.
  - A mock API for local testing and demonstration.
  - Global state management for user authentication using React Context.

## Technologies Used

- **Backend:** Java 17, Spring Boot 3, Spring Security, Spring Data JPA, H2 Database (for development), PostgreSQL (configurable for production)
- **Frontend:** React, TypeScript, Vite, Tailwind CSS, React Router DOM
- **Documentation:** Swagger (Springdoc OpenAPI)

## Getting Started

### Prerequisites

- Java 17 installed on your machine.
- Maven installed for backend building.
- Node.js (v14 or later) and npm for frontend development.
- Your preferred IDE (e.g., IntelliJ IDEA, VSCode, Eclipse).

## Frontend Setup

1. Clone the Frontend

- Navigate to the frontend directory (if separate) or clone the repository and open the frontend folder:

```bash
git clone https://your-repository-url.git
cd product-catalog-frontend
```

2. Install Dependencies

- Install the Node.js dependencies:

```bash
npm install
Run the Frontend
```

3. Start the development server:

```bash
npm run dev
```

##### The application will open in your browser at http://localhost:3000 or a similar port.

# Configuration

### Backend

1. Database:

- The project uses an in-memory H2 database by default. You can find the H2 configuration in src/main/resources/application.properties. For production, update the datasource settings to use PostgreSQL.

2. Security & JWT:
   The application uses JWT for authentication. You can set the secret key in an external properties file (application-secrets.properties) to avoid hardcoding sensitive data.

### Frontend

1. Mock API:

- The frontend uses a mock API defined under src/services/api.ts to simulate interactions with the backend. This mock API supports user registration, login, and fetching products and categories.

2. Tailwind CSS:

- Styling is handled with Tailwind CSS. The Tailwind configuration is found in tailwind.config.js and the main style imports are in src/index.css.

### Usage

1. Authentication:

- Use the provided test credentials to log in:

##### Username: user

##### Password: password

- Registered users are stored in local memory (or persisted via localStorage for the mock). The application shows a clear header with navigation links and options for login and logout.

### API Documentation:

- Access the Swagger UI for interactive API documentation at: http://localhost:8080/swagger-ui/index.html

### Product & Category Pages:

- Once logged in, you can view products and categories in a modern, responsive layout with a clean design and hover effects.
