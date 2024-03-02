import React from "react"; 
import HighlightIcon from '@mui/icons-material/Highlight';

function Heading(){
    return (
        <header>
            <HighlightIcon className='light' />
            <h1 style={{display: 'inline-block'}}>Keeper</h1>
        </header>
    );
}

export default Heading;