import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header';

const getRandomColor = () => {
  const colors = [
    "#BB2649", "#6667AB", "#939597", "#0F4C81", "#FF6F61", "#51e2f5", "#9df9ef", "#edf756", "#ffa8B6",
    "#6B5B95", "#88B04B", "#955251", "#DD4124", "#EFC050", "#FF5733", "#33FF57", "#5733FF", "#FFC300",
    "#DAF7A6", "#1287A8", "#005F73", "#00A8E8", "#007991", "#89CFF0"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const App = () => {
  const loadNotesFromLocalStorage = () => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      return JSON.parse(savedNotes);
    }
    return [];
  };

  const [notes, setNotes] = useState(loadNotesFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = ({ title , text }) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
      color: getRandomColor()
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const updateNote = (id, newTitle, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, title: newTitle, text: newText } : note
      )
    );
  };

  const [searchText, setSearchText] = useState("");
  
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase()) ||
      note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`container ${theme}`}> 
      <Header onSearch={(value) => setSearchText(value)} toggleTheme={toggleTheme} theme={theme} />
      <NoteList notes={filteredNotes} AddNote={addNote} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
};

export default App;
