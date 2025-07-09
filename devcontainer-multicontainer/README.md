# Devcontainer Multicontainer Example

This is a sample multi-container development environment using Docker Compose and VS Code Dev Containers.

## Structure
- `app-backend`: Go API backend (serves on port 8080)
- `app-frontend`: Node.js Express frontend (serves on port 3000, calls backend)
- `.devcontainer`: Devcontainer config for VS Code
- `docker-compose.yml`: Multi-container orchestration

## Usage
1. Open this folder in VS Code.
2. Reopen in Container when prompted.
3. The frontend will be available at http://localhost:3000 and will display a message from the backend.

## Development
- Edit Go code in `app-backend` and Node.js code in `app-frontend`.
- Containers will rebuild as needed.
