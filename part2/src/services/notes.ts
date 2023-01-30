import axios from 'axios';
import { NoteInterface } from '../App';

const baseUrl = 'http://localhost:4000/notes';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
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
