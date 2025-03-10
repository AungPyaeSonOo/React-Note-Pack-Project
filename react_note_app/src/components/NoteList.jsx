import React from 'react';
import Note from './Note';
import NewNote from './NewNote';

const NoteList = ({ notes, AddNote , deleteNote , updateNote }) => {
  return (
    <div className='notes-list d-grid'>
      {notes.map((note) => (
        <Note
            id={note.id}
            title={note.title}
            text={note.text}
            date={note.date}
            color={note.color} 
            deleteNote={deleteNote}
            updateNote={updateNote}
        />
      ))}
      
      <NewNote AddNote={AddNote} />
      
    </div>
  );
};

export default NoteList;