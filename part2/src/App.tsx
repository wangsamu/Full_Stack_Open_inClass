import { FunctionComponent, useState } from 'react';
import './App.css';

interface AppProps {
  notes: { id: number; content: string; important: boolean }[];
}

const App: FunctionComponent<AppProps> = ({ notes }) => {
  return (
    <div className='App'>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.content}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
