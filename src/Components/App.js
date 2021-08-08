import React, { useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Note from "./Note.js";
import CreateArea from "./CreatArea.js";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(noteId) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== noteId;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {return(<Note key={index} id={index} title={note.title} content={note.content} delete={deleteNote}/>);})}
      <Footer />
    </div>
  );
}
export default App;
