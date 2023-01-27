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

// interface AppProps {
//   notes: { id: number; content: string; important: boolean }[];
// }

const App: FunctionComponent = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/notes').then((response) => {
      console.log(response.data);
      setNotes(response.data);
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
    setNotes([...notes].concat(newNote));
    setInputValue('');
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className='App'>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <li key={note.id} className={note.important ? 'important' : ''}>
            {note.content}
          </li>
        ))}
      </ul>
      <button onClick={toggleShowAll}>
        {showAll ? 'show important' : 'show all'}
      </button>
      <form onSubmit={addNote}>
        <input type='text' value={inputValue} onChange={handleInput} />
        <button type='submit'>save</button>
      </form>
    </div>
  );
};

export default App;
