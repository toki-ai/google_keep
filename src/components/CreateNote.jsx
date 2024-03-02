import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Zoom from '@mui/material/Zoom';

function CreateNote(props){
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [check, setCheck]= React.useState(false);  

    function changeTitle(event){
        setTitle(event.target.value);
    }

    function changeContent(event){
        setCheck(true);
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
        setCheck(false);
        event.preventDefault();
    }
    const style = {
        color: '#f5ba13',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        cursor: 'pointer',
        position: 'absolute',
        right: '18px',
        bottom: '-18px',
        outline: 'none',
        backgroundColor: 'white',
    }
    function change(){
        setCheck(true);
    }
    return (
        <div>
          <form onMouseOver={change}>
            {check && (<input name="title" placeholder="Title" onChange={changeTitle} value={title}/>)}
            <textarea name="content" placeholder="Take a note..." rows={check ? 3 :1} onChange={changeContent} value={content}/>
            <Zoom in={check}>
                <button onClick={handleAdd}>
                    <AddCircleIcon className='addIcon'/>
                </button>
            </Zoom>
          </form>
        </div>
      );
}

export default CreateNote;