# Mini Kanban Task Manager

A full-stack Kanban board built with React and Node.js/Express. Organize tasks into **To Do** and **Done** columns with drag-free toggle actions.

## Live Demo

- **Frontend**: [Vercel Link](https://kanban-frontend-three-eta.vercel.app)
- **Backend API**: [Render Link](https://kanban-app-t5cy.onrender.com/tasks)
- **Health Check**: [Health](https://kanban-app-t5cy.onrender.com/health)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, CSS Custom Properties |
| Backend | Node.js, Express, CORS |
| Deployment | Vercel (frontend), Render (backend) |

## Features

- Create tasks with title validation
- View tasks grouped by status (To Do / Done)
- Toggle tasks between columns
- Delete tasks
- Loading skeleton animation
- Error handling with banner
- Responsive design (mobile + desktop)
- Dark mode (system preference)

## Getting Started

```bash
# Install all dependencies
npm run install:all

# Start both servers
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## API Endpoints

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| GET | `/tasks` | - | Get all tasks |
| POST | `/tasks` | `{ "title": "string" }` | Create a task |
| PUT | `/tasks/:id` | `{ "status": "todo" \| "done" }` | Update task status |
| DELETE | `/tasks/:id` | - | Delete a task |

## Project Structure

```
kanban-app/
├── backend/
│   ├── src/
│   │   ├── app.js          # Express app setup
│   │   └── routes/tasks.js # CRUD routes
│   ├── server.js           # Entry point
│   └── Procfile            # Render deployment
├── frontend/
│   ├── src/
│   │   ├── api/tasks.js    # API client
│   │   ├── components/     # React components
│   │   ├── hooks/useTasks.js
│   │   ├── App.jsx
│   │   └── index.css       # All styles
│   ├── vercel.json
│   └── vite.config.js
├── render.yaml             # Render deployment
└── package.json            # Root scripts
```

## License

MIT
