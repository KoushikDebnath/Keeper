import React, { useState } from "react";

function CreateArea(Props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function addNote(event) {
    Props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return { ...prevNote, [name]: value };
    });
  }

  return (
    <form action="">
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        rows="3"
        placeholder="Take a note..."
        value={note.content}
        onChange={handleChange}
      />
      <button onClick={addNote}>Add</button>
    </form>
  );
}

export default CreateArea;
