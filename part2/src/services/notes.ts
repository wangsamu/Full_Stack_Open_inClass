import axios from 'axios';
import { NoteInterface } from '../App';

const baseUrl = 'http://localhost:4000/notes';

const getAll = () => {
  const mockNonExistentNote = {
    id: 999,
    content: "I dont't exist in the database",
    important: true,
  };
  const request = axios.get(baseUrl);
  return request.then((response) => response.data.concat(mockNonExistentNote));
};

const create = (newNote: NoteInterface) => {
  const request = axios.post(baseUrl, newNote);
  return request.then((response) => response.data);
};

const update = (newNote: NoteInterface) => {
  const request = axios.put(`${baseUrl}/${newNote.id}`, newNote);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
