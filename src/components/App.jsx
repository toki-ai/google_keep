import React from "react"; 
import Heading from "./Heading"; 
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import notes from "../node.js";

function App(){
    const [note, setNote] = React.useState([...notes]);

    function deleteNote(id){
        setNote(note.filter((note,index) => {return index !== id }));
    }

    function addNewNode(newNode){
        setNote(pre => {return [...pre, newNode]});
    }

    return(
        <div className='container'>
            <Heading /> 
            <div className='content'>
                <CreateNote onAdd={addNewNode} length={notes.length}/>
                {note.map((note, index) => <Note key={note.key} id={index} note={note} onDelete={deleteNote}/>)} 
            </div>
            <Footer className='footer' />
        </div>
    );
}

export default App;