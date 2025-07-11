import React, { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();

export function useNotes() {
  return useContext(NotesContext);
}

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8080/notes");
    const data = await res.json();
    setNotes(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const createNote = async (note) => {
    const res = await fetch("http://localhost:8080/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    if (res.ok) fetchNotes();
  };

  const updateNote = async (id, note) => {
    const res = await fetch(`http://localhost:8080/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    if (res.ok) fetchNotes();
  };

  const deleteNote = async (id) => {
    const res = await fetch(`http://localhost:8080/notes/${id}`, {
      method: "DELETE",
    });
    if (res.ok) fetchNotes();
  };

  return (
    <NotesContext.Provider
      value={{ notes, loading, createNote, updateNote, deleteNote }}
    >
      {children}
    </NotesContext.Provider>
  );
}
