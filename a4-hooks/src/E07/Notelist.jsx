import React, { useState } from 'react';
import FilteredNotes from './FilteredNotes';

const Notelist = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNewNote = () => {
    const newNoteObj = {
      id: notes.length + 1,
      title: newNote
    };

    setNotes(prevNotes => [...prevNotes, newNoteObj]);
    setNewNote('');
  };

  return (
    <>
      <input type='text' value={newNote} onChange={e => setNewNote(e.target.value)} />
      <button onClick={addNewNote}>Add New Note</button>
      <h3>All Notes</h3>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.id} - {note.title}
          </li>
        ))}
      </ul>
      <h3>Js Included Notes</h3>
      <FilteredNotes notesArray={notes} />
    </>
  );
};

export default Notelist;
