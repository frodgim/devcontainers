import React, { useState, useEffect } from "react";
import { useNotes } from "../NotesContext";

export default function NoteForm({ editingNote, onDone }) {
  const { createNote, updateNote } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      updateNote(editingNote.id, { title, content });
    } else {
      createNote({ title, content });
    }
    onDone();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{editingNote ? "Update" : "Add"} Note</button>
      {editingNote && <button onClick={onDone}>Cancel</button>}
    </form>
  );
}
