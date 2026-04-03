# 📌 Express Backend API

This project is a Node.js/Express backend that provides RESTful APIs for **task management** and **user authentication/authorization**. It includes secure routes for creating, updating, and deleting tasks, as well as user signup, login, password management, and profile updates.

---

## 🚀 Features

- Task CRUD operations (`/api/v1/tasks`)
- User authentication (signup, login, logout)
- Password reset and update
- User profile management (update, delete, get own data)
- Middleware for security and error handling

---

## 📂 Project Structure

project-root/
│── controllers/ │
| ├── taskController.js
| ├── userController.js
└── authController.js
── routes/
│
├── taskRoutes.js
└── userRoutes.js
── models/
│
├── taskModel.js
└── userModel.js
── utils/
│
├── apiFeatures.js
└── appError.js
└── catchAsync.js
└── email.js
│── app.js
│── server.js
│── package.json
|── config.env
│── README.md

---

## 🔑 API Endpoints

### Tasks (`/api/v1/tasks`)

| Method | Endpoint | Description             |
| ------ | -------- | ----------------------- |
| GET    | `/`      | Get all tasks           |
| POST   | `/`      | Create a new task       |
| GET    | `/:id`   | Get a single task by ID |
| PATCH  | `/:id`   | Update a task by ID     |
| DELETE | `/:id`   | Delete a task by ID     |

#### Example Responses

- **GET /api/v1/tasks**

```json
{
  "status": "success",
  "results": "2",
  "data": {
    "data": [
      {
        "_id": "69cfb40124807c3860c19366",
        "title": "Finish project",
        "createdBy": "69cfb4054807b3869c19366",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nihil!",
        "dueDate": "2026-04-24T00:00:00.000+00:00",
        "priority": "low",
        "status": "done",
        "createdAt": "2026-04-24T00:00:00.000+00:00",
        "updatedAt": "2026-04-24T00:00:00.000+00:00"
      },
      {
        "_id": "69cfb42124807c3869c19375",
        "title": "Buy groceries",
        "createdBy": "69cfb4054807b3869c19366",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nihil!",
        "dueDate": "2026-04-24T00:00:00.000+00:00",
        "priority": "low",
        "status": "done",
        "createdAt": "2026-04-24T00:00:00.000+00:00",
        "updatedAt": "2026-04-24T00:00:00.000+00:00"
      }
    ],
    "meta": {
      "page": "1",
      "limit": "2",
      "nextPage": "2",
      "totalPages": "4"
    }
  }
}
```

- **GET /api/v1/tasks/:id**

```json
{
  "status": "success",
  "data": {
    "data": {
      "_id": "69cfb42124807c3869c19375",
      "title": "Buy groceries",
      "createdBy": "69cfb4054807b3869c19366",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nihil!",
      "dueDate": "2026-04-24T00:00:00.000+00:00",
      "priority": "low",
      "status": "done",
      "createdAt": "2026-04-24T00:00:00.000+00:00",
      "updatedAt": "2026-04-24T00:00:00.000+00:00"
    }
  }
}
```

- **PATCH /api/v1/tasks/:id**

```json
{
  "status": "success",
  "data": {
    "data": {
      "_id": "69cfb42124807c3869c19375",
      "title": "Buy groceries",
      "createdBy": "69cfb4054807b3869c19366",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nihil!",
      "dueDate": "2026-04-24T00:00:00.000+00:00",
      "priority": "low",
      "status": "done",
      "createdAt": "2026-04-24T00:00:00.000+00:00",
      "updatedAt": "2026-04-24T00:00:00.000+00:00"
    }
  }
}
```

- **DELETE /api/v1/tasks/:id**

```json
{
  "status": "success",
  "data": "null"
}
```

---

### Users (`/api/v1/users`)

| Method | Endpoint                | Description                          |
| ------ | ----------------------- | ------------------------------------ |
| POST   | `/signup`               | Register a new user                  |
| POST   | `/login`                | Log in a user                        |
| GET    | `/logout`               | Log out a user                       |
| POST   | `/forgotPassword`       | Request password reset (email token) |
| PATCH  | `/resetPassword/:token` | Reset password using token           |
| PATCH  | `/updateMyPassword`     | Update current user’s password       |
| GET    | `/me`                   | Get current user’s profile           |
| PATCH  | `/updateMe`             | Update current user’s profile        |
| DELETE | `/deleteMe`             | Delete current user’s account        |

#### Example Responses

## POST /api/v1/users/signup

```json
{
  "status": "success",
  "data": {
    "user": {
      "_id": "69cfb42124807c3869c19375",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2026-04-24T00:00:00.000+00:00",
      "updatedAt": "2026-04-24T00:00:00.000+00:00"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2U3NWUwOGUwYTAzYTZjNzQ5NjMxMiIsImlhdCI6MTc3NTE2MTYyMSwiZXhwIjoxNzgyOTM3NjIxfQ.hQ9I-Gh_JxSAMgvwLw8MolNT6_DYxMWWqKe5-aJc1X1"
  }
}
```

## POST /api/v1/users/login

```json
{
  "status": "success",
  "data": {
    "user": {
      "_id": "69cfb42124807c3869c19375",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2026-04-24T00:00:00.000+00:00",
      "updatedAt": "2026-04-24T00:00:00.000+00:00"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2U3NWUwOGUwYTAzYTZjNzQ5NjMxMiIsImlhdCI6MTc3NTE2MTYyMSwiZXhwIjoxNzgyOTM3NjIxfQ.hQ9I-Gh_JxSAMgvwLw8MolNT6_DYxMWWqKe5-aJc1X1"
  }
}
```

## POST /api/v1/users/me

```json
{
  "status": "success",
  "data": {
    "data": {
      "_id": "69cfb42124807c3869c19375",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2026-04-24T00:00:00.000+00:00",
      "updatedAt": "2026-04-24T00:00:00.000+00:00"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Y2U3NWUwOGUwYTAzYTZjNzQ5NjMxMiIsImlhdCI6MTc3NTE2MTYyMSwiZXhwIjoxNzgyOTM3NjIxfQ.hQ9I-Gh_JxSAMgvwLw8MolNT6_DYxMWWqKe5-aJc1X1"
  }
}
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

## 2. Install dependencies

```
npm install
```

## 3. Environment variables

Create a .env file in the root directory and add

```js
PORT=3000
DATABASE=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_pass
```

## 4. Run the server

```bash
npm run dev
```

## 4. Your API will be available at

```js
"http://localhost:3000/api/v1/tasks";
"http://localhost:3000/api/v1/users";
```

## 5 Example Request

```js
POST "http://localhost:3000/api/v1/users/signup"
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "test1234",
  "passwordConfirm": "test1234"
}
```
