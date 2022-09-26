import { v4 as uuidv4 } from 'uuid';

function addNote(title, content, stateSetter){
    notes.push({id:uuidv4(), title, content});
    stateSetter([...notes]);
}
function deleteNote(id, stateSetter){
    notes = notes.filter((note)=> note.id !== id);
    console.table(notes);
    stateSetter([...notes]);
}

let notes = [];

export default notes;
export {addNote, deleteNote};