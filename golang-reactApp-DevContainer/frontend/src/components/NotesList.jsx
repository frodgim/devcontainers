import React from "react";
import { useNotes } from "../NotesContext";

export default function NotesList({ onEdit }) {
  const { notes, loading, deleteNote } = useNotes();

  if (loading) return <div>Loading...</div>;
  if (!notes.length) return <div>No notes yet.</div>;

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <strong>{note.title}</strong>: {note.content}
          <button onClick={() => onEdit(note)}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
