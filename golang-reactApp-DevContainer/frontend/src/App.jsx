import React, { useState } from "react";
import { NotesProvider } from "./NotesContext";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";

function App() {
  const [editingNote, setEditingNote] = useState(null);

  return (
    <NotesProvider>
      <h1>Notes App</h1>
      <NoteForm
        editingNote={editingNote}
        onDone={() => setEditingNote(null)}
      />
      <NotesList onEdit={setEditingNote} />
    </NotesProvider>
  );
}

export default App;
