import React from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Remove';

function AddButton(props){
    return <button className="add-button" onClick={props.handleAdded} >
    {(props.delete) ? <DeleteIcon style={{color:"white"}} /> 
                        :<AddIcon style={{color:"white"}} />}</button>
}

export default AddButton;