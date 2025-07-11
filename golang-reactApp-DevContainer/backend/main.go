package main

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type Note struct {
	ID      int    `json:"id"`
	Title   string `json:"title"`
	Content string `json:"content"`
}

var notes = []Note{}
var nextID = 1

func main() {
	r := gin.Default()
	r.Use(corsMiddleware())

	r.GET("/notes", getNotes)
	r.POST("/notes", createNote)
	r.PUT("/notes/:id", updateNote)
	r.DELETE("/notes/:id", deleteNote)

	r.Run(":8080")
}

func getNotes(c *gin.Context) {
	c.JSON(http.StatusOK, notes)
}

func createNote(c *gin.Context) {
	var note Note
	if err := c.ShouldBindJSON(&note); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	note.ID = nextID
	nextID++
	notes = append(notes, note)
	c.JSON(http.StatusCreated, note)
}

func updateNote(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var updatedNote Note
	if err := c.ShouldBindJSON(&updatedNote); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	for i, n := range notes {
		if n.ID == id {
			notes[i].Title = updatedNote.Title
			notes[i].Content = updatedNote.Content
			c.JSON(http.StatusOK, notes[i])
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Note not found"})
}

func deleteNote(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	for i, n := range notes {
		if n.ID == id {
			notes = append(notes[:i], notes[i+1:]...)
			c.Status(http.StatusNoContent)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Note not found"})
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
