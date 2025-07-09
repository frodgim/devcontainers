FROM golang:1.22-alpine
WORKDIR /app
COPY . .
RUN go mod init app-backend && go mod tidy
RUN go build -o main .
EXPOSE 8080
CMD ["/app/main"]
