# Mini Kanban Task Manager

* * *
## Objective
Build a simple **Kanban-style Task Manager** using:
*   **Frontend:** React
*   **Backend:** Node.js + Express
Tasks must be organized into **two columns**:
*   **To Do**
*   **Done**
* * *
## Requirements Overview
The Task Manager should allow users to:
*   Create a new task
*   View all tasks grouped by status
*   Move tasks between **To Do ↔ Done**
*   Delete tasks
* * *
# Backend (Node.js + Express)
## Data Structure
Each task should follow:

```typescript
{
  "id": number,
  "title": string,
  "status": "todo" | "done"
}


```

Use an **in-memory array** (no database).
* * *
## API Endpoints
### 1️⃣ Get All Tasks
**GET /tasks**
Returns all tasks.
* * *
### 2️⃣ Create Task
**POST /tasks**
Request body:

```json
{
  "title": "Buy milk"
}


```

*   Default status should be `"todo"`
* * *
### 3️⃣ Update Task Status
**PUT /tasks/:id**
Request body:

```json
{
  "status": "done"
}


```

*   Status must be `"todo"` or `"done"`
* * *
### 4️⃣ Delete Task
**DELETE /tasks/:id**
Deletes task by ID.
* * *
## Backend Requirements
*   Use proper HTTP status codes
*   Return JSON responses
*   Add basic validation:
    *   Title must not be empty
    *   Status must be `"todo"` or `"done"`
* * *
# Frontend (React)
## UI Layout
Display two columns side-by-side:

```julia
[ To Do ]        [ Done ]
   Task 1           Task 3
   Task 2           Task 4


```

* * *
## Features
### 1️⃣ View Tasks
*   Fetch tasks from backend
*   Group into:
    *   `todoTasks`
    *   `doneTasks`
* * *
### 2️⃣ Add Task
*   Input field + button
*   New tasks appear in **To Do**
* * *
### 3️⃣ Move Task
*   Button or checkbox to:
    *   Mark as Done
    *   Move back to To Do
* * *
### 4️⃣ Delete Task
*   Delete button per task
* * *
## Technical Requirements
*   Use React hooks (`useState`, `useEffect`)
*   Use `fetch` or `axios`
*   Show:
    *   Loading state
    *   Error handling
* * *
## ✅ Expected Output
A working full-stack application with:
*   Task creation
*   Task movement (To Do ↔ Done)
*   Task deletion
*   Clean and structured code
* * *
**Focus on functionality first. Keep the solution simple and clean.** 🚀