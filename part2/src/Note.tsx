import React from 'react';
import { NoteInterface } from './App';

interface NoteProps {
  note: NoteInterface;
  toggleImportance: (params: number) => void;
}
const Note: React.FC<NoteProps> = ({ note, toggleImportance }) => {
  const { id, content, important } = note;
  const label = important ? 'make not important' : 'make important';

  return (
    <div>
      <li className={important ? 'note-important' : 'note'}>
        {content}
        <button
          className='toggle-importance-button'
          onClick={() => toggleImportance(id)}
        >
          {label}
        </button>
      </li>
    </div>
  );
};

export default Note;
