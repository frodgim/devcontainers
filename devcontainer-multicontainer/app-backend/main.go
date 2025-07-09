package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/api", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello from Go backend!")
	})
	fmt.Println("Backend running on :8080")
	http.ListenAndServe(":8080", nil)
}
