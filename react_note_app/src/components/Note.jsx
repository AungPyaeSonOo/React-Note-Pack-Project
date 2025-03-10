import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const Note = ({ id, title, text, date, color, deleteNote, updateNote }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setNewText(e.target.value);
  };

  const handleSaveEdit = (e) => {
    e.stopPropagation();
    updateNote(id, newTitle, newText);
    setIsEditing(false);
  };

  return (
    <div
      className="note shadow-sm"
      style={{
        backgroundColor: color,
        borderRadius: "10px",
        transition: "transform 0.2s ease, box-shadow 0.3s ease",
      }}
      onClick={() => setIsEditing(true)}
    >
      <div>
        {isEditing ? (
          <>
            <textarea
              rows="1"
              cols="5"   
              value={newTitle}
              onChange={handleTitleChange}
              className="edit-title"
              style={{
                backgroundColor: color,
                border: "none",
                width: "100%",
                fontSize: "1rem",
                color: "black",
                padding: "10px",
                minHeight: "20px",
              }}
            />
            <textarea
              rows="6"
              cols="10"
              value={newText}
              onChange={handleTextChange}
              className="edit-text"
              style={{
                backgroundColor: color,
                border: "none",
                width: "100%",
                fontSize: "1rem",
                color: "black",
                padding: "10px",
                minHeight: "100px",
              }}
            ></textarea>
          </>
        ) : (
          <>
            <p className="text-center">{title}</p>
            <span className="mt-1">{text}</span>
          </>
        )}
      </div>
      <div className="note-footer mt-4">
        <small>{date}</small>

        {isEditing ? (
          <Button onClick={handleSaveEdit} variant="outline-dark" size="sm">
            <GiNotebook className="text-center mb-1"/> Save
          </Button>
        ) : (
          <Button onClick={() => deleteNote(id)} variant="outline-dark" size="sm">
            <FaTrash/> Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default Note;