import React, { useState } from "react";
import AddButton from "./AddButton";

function AddBar(props){

    const [titleCreated, setTitleCreated] = useState(false);

    const [value, setValue] = useState("");

    function createTitle(event){
        const newValue = event.target.value;
        setTitleCreated(true);
    }

    return <div>
    { ((!titleCreated) || !props.isTitle) ? 
    <span style={{display:"inline-block"}}>
        <AddButton handleAdded={createTitle}/>
        <form>
            <input
                onChange={props.makeTitle}
                name={props.name}
                placeholder={props.placeholder}
            /> 
        </form>
    </span> : <h3>{props.note.title}</h3>}
</div>   
}

export default AddBar;