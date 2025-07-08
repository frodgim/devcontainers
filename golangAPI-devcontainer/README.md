# Go API Example with DevContainer

This project is a minimal Go REST API with a `/hello` endpoint that returns a JSON greeting. It is ready to use with VS Code Dev Containers.

## Features
- Go 1.21
- REST endpoint: `/hello`
- DevContainer configuration for VS Code

## Getting Started

1. **Open in VS Code** and reopen in the container when prompted.
2. **Run the API:**
   ```sh
   go run main.go
   ```
3. **Test the endpoint:**
   Visit [http://localhost:8080/hello](http://localhost:8080/hello) in your browser or use curl:
   ```sh
   curl http://localhost:8080/hello
   ```

## DevContainer
- The devcontainer exposes port 8080 and installs the Go extension for VS Code.

---

For more information, see the `.devcontainer/devcontainer.json` file.
