import React, { useMemo } from 'react';

const FilteredNotes = ({ notesArray }) => {
  return (
    <>
      {useMemo(() => {
        return notesArray
          .filter(note => {
            console.log('Filter Run !!');
            return note.title.toLowerCase().includes('js');
          })
          .map(note => (
            <ul key={note.id}>
              <li>
                {note.id} - {note.title}
              </li>
            </ul>
          ));
      }, [notesArray])}
    </>
  );
};

export default FilteredNotes;
