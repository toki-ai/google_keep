import react from "react"; 

function footer(){
    const date = new Date(); 
    const year = date.getFullYear();
    return(
        <footer>
            <p>@Copy right {year}</p>
        </footer>
    )
}

export default footer; 