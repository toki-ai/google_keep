import React from "react";

function CreateNote(props){
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    function changeTitle(event){
        setTitle(event.target.value);
    }

    function changeContent(event){
        setContent(event.target.value);
    }

    function handleAdd(event){
        const newNode = {
            key: (props.lenght + 1),
            title: title,
            content: content,
        }
        props.onAdd(newNode);
        setTitle(""); 
        setContent("");
        event.preventDefault();
    }

    return (
        <div>
          <form>
            <input name="title" placeholder="Title" onChange={changeTitle} value={title}/>
            <textarea name="content" placeholder="Take a note..." rows="3" onChange={changeContent} value={content}/>
            <button onClick={handleAdd}>Add</button>
          </form>
        </div>
      );
}

export default CreateNote;