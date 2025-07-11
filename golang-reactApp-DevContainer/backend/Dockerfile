# Backend Dockerfile
FROM golang:1.20-alpine as builder
WORKDIR /app
COPY . .
RUN go mod tidy && go build -o notesapp main.go

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/notesapp .
EXPOSE 8080
CMD ["./notesapp"]
