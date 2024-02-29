import React from "react"; 

function Note(props){
    function handleClick(event){
        props.onDelete(props.id);
        event.preventDefault();
    }
    return(
        <div className = "note">
            <h1>{props.note.title}</h1>
            <p>{props.note.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;