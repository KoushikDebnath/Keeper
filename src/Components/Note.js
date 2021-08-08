import React from "react";

function Note(Props) {
  function click() {
    Props.delete(Props.id);
  }
  return (
    <div className="note">
      <h1>{Props.title}</h1>
      <p>{Props.content}</p>
      <button onClick={click}>DELETE</button>
    </div>
  );
}

export default Note;
