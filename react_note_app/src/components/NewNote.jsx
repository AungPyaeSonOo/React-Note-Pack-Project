import React, { useState } from "react";
import { LuNotebookPen } from "react-icons/lu";

const NewNote = ({ AddNote }) => {

  const [titleText, setTitleText] = useState("");
  const [noteText, setNoteText] = useState("");
  const TextNumber = 0;

  const handleTitleChange = (e) => {
    setTitleText(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };

  const totalTextLength = titleText.length + noteText.length;

  const SaveNote = () => {
    if (titleText.length + noteText.length > 0) {
      AddNote({ title: titleText, text: noteText });
      setTitleText("");
      setNoteText("");
    }
  };

  return (
      <div className="note new">
        <div className="d-flex flex-column">
          <textarea
            rows="1"
            cols="5"
            placeholder="Title..."
            value={titleText}
            onChange={handleTitleChange}
          ></textarea>
          <textarea
            className="mt-3"
            rows="6"
            cols="10"
            placeholder="Start Typing..."
            value={noteText}
            onChange={handleNoteChange}
          ></textarea>
        </div>
        <div className="note-footer mt-3 d-flex justify-content-between me-2">
           <small>{TextNumber + totalTextLength} characters</small>
          <button className="save font-bold" onClick={SaveNote}>
            <LuNotebookPen className="text-center mb-1"/> Save
          </button>
        </div>
      </div>
   
  );
};

export default NewNote;