import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import notes, { addNote } from './notes'

function App() {
  const [list, setList] = useState([{
    id: 0,
    title: "This is a Sample Note",
    content: "Click the add button at right bottom to add a new note."
  }]);
  return (
    <>
    <Header />
    {list.map((note, key) => {return(
      <Note 
        key = {key}
        id = {note.id}
        title = {note.title}
        content = {note.content}
        stateSetter = {setList}
      />)
    })}
    <button className='add-button' onClick={()=>{addNote(prompt("Enter title"), prompt("Enter Content"), setList)}}>+</button>
    <Footer />
    </>
  );
}

export default App;
