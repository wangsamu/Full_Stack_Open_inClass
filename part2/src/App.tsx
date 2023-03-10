import React, {
  FormEvent,
  FunctionComponent,
  KeyboardEvent,
  MouseEvent,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import './App.css';
import axios from 'axios';
import Note from './Note';
import noteService from './services/notes';
import { Notification } from './Notification';

// interface AppProps {
//   notes: { id: number; content: string; important: boolean }[];
// }

interface NoteInterface {
  id: number;
  content: string;
  important: boolean;
}

const App: FunctionComponent = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      console.log(initialNotes);
      setNotes(initialNotes);
    });
  }, []);

  const addNote = (event: SyntheticEvent) => {
    event.preventDefault();
    const newId = Math.max(...notes.map((note) => note.id)) + 1;
    const newNote = {
      id: newId,
      content: inputValue,
      important: Math.random() < 0.5,
    };

    noteService.create(newNote).then((returnedNote) => {
      console.log(returnedNote);
      setNotes([...notes].concat(newNote));
      setInputValue('');
    });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const toggleShowAll = () => setShowAll(!showAll);

  const toggleImportanceOf = (id: number) => {
    const note = notes.find((note) => note.id === id);
    if (note) {
      const changedNote = { ...note, important: !note.important };
      noteService
        .update(changedNote)
        .then((returnedNote) => {
          console.log(`Toggling the importance of note ${id}`);
          setNotes(
            [...notes].map((note) =>
              note.id === id ? (note = returnedNote) : note
            )
          );
        })
        .catch((error) => {
          setErrorMessage(
            `The note with id ${id}, '${note.content}' has already been removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setNotes(notes.filter((note) => note.id !== id));
        });
    }
  };

  return (
    <div className='App'>
      <h1 className='logo'>Notes</h1>
      <Notification errorMessage={errorMessage} />
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <button className='toggle-show-button' onClick={toggleShowAll}>
        {showAll ? 'show important' : 'show all'}
      </button>
      <form onSubmit={addNote}>
        <input type='text' value={inputValue} onChange={handleInput} />
        <button type='submit'>save</button>
      </form>
    </div>
  );
};

export { App as default, type NoteInterface };
