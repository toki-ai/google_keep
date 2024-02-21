import React from "react"; 
import Heading from "./Heading"; 
import Footer from "./Footer";
import Note from "./Note";

function app(){
    return(
        <div>
            <Heading /> 
            <Note /> 
            <Note/>
            <Footer /> 
        </div>
    );
}

export default app;