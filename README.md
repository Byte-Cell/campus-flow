# Campus Flow

Campus Flow is a full-stack campus resource directory that helps students, faculty, staff, and visitors find university information in one place.

The application provides searchable campus resources, category filtering, individual resource pages, and a REST API backed by PostgreSQL.

## Features

- Browse campus resources
- Search resources by title, description, category, and audience
- Filter resources by category
- View individual resource details
- REST API for resource management
- Create, read, update, and delete resources
- PostgreSQL database integration
- Loading and error states
- Request validation
- Resource ID validation
- Security headers with Helmet
- JSON request-size limiting
- Environment-based database configuration

## Tech Stack

### Frontend

- React
- React Router
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express
- PostgreSQL
- `pg`
- Helmet
- dotenv

## Project Structure

```text
campus-flow/
├── backend/
│   ├── db/
│   │   └── database.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── src/
│   ├── api/
│   │   └── resources.js
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md