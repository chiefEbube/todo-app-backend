# Full-Stack Task: Task Management App

## Objective

Build a React frontend that consumes the Tasks API you previously built with Express.

You will deploy the backend on Railway and the frontend on Vercel.

---

## 1. Backend

Before starting the frontend:

### Enable CORS

Install CORS:

```bash
npm install cors
```

In `index.js`:

```javascript
import cors from "cors";

app.use(cors());
app.use(express.json());
```

Also change your port to:

```javascript
const PORT = process.env.PORT || 3000;
```

Make sure these endpoints work:

```text
GET     /api/v1/tasks
GET     /api/v1/tasks/:id
POST    /api/v1/tasks
PATCH   /api/v1/tasks/:id
DELETE  /api/v1/tasks/:id
```

Push the backend to a separate GitHub repository and deploy it to Railway.

---

## 2. Frontend

Create a React/Vite application.

Build a responsive Task Management Dashboard.

Your frontend must allow users to:

- View all tasks
- View task details
- Create a task

Also implement:

- Loading states
- Error handling
- Responsive UI

Use shadcn UI components and tailwind css.

---

## 3. API Integration

Create a single API base URL:

```javascript
const BASE_URL = "https://your-backend.up.railway.app/api/v1";
```

Use it for all requests:

```javascript
fetch(`${BASE_URL}/tasks`);
```

Important: Do not use `localhost` in the production frontend. The deployed frontend must communicate with the Railway backend URL.

---

## 4. Deployment

You must have two separate GitHub repositories:

```text
task-manager-backend
task-manager-frontend
```

### Backend

GitHub → Railway

### Frontend

GitHub → Vercel

Test the complete application using the live Vercel URL.

---

## Submission

Submit:

1. Frontend GitHub repository
2. Backend GitHub repository
3. Live Vercel URL
