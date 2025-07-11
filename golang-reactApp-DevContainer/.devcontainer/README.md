# DevContainer for Go + React Notes App

## How to use

- The backend (Go + Gin) runs on port 8080.
- The frontend (React) runs on port 5173 (Vite dev server).

### Getting Started

1. Open this folder in VS Code with Dev Containers extension.
2. The backend and frontend dependencies will be installed automatically.
3. To start the backend:
   ```sh
   cd backend
   go run main.go
   ```
4. To start the frontend:
   ```sh
   cd frontend
   npm run dev
   ```

The frontend will connect to the backend at `http://localhost:8080`.
