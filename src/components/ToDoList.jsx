import React, { useState } from "react";
import AddBar from "./AddBar";
import AddButton from "./AddButton";

function ToDoList(props){

    const [titleCreated, setTitleCreated] = useState(false);

    const [note, setNote] = useState({
        title: "",
        items: []
    })

    const [item, setItem] = useState("");

    function makeItem(event){
        console.log(event.target.value);
        const nextItem = event.target.value;
        setItem(nextItem)
    }

    function addItemToList(){
        setNote((prevNote) => {
            return {
                ...prevNote,
                items: [...prevNote.items, item]
            }
        })
        setItem("");
    }

    function makeTitle(event){
        const newTitle = event.target.value;
        setNote(prevNote => {
            return {
                ...prevNote,
                title: newTitle
            }
        });
    }

    function createTitle(event){
        if (titleCreated == false){
            const newValue = event.target.value;
            setTitleCreated(true);
        } else {
            setTitleCreated(false);
            setNote(prevNote => {
                return {
                    ...prevNote,
                    title: ""
                }
            });
        }  
    }

    return(
    <div className="to-do-list">
        { (!titleCreated) ? 
        <span style={{display:"inline-block"}}>
            <AddButton delete={false} handleAdded={createTitle}/>
            <form>
                <input
                    onChange={makeTitle}
                    name="title"
                    placeholder="Add a title..."
                /> 
         </form>
        </span> : <span>
            <AddButton delete={true} handleAdded={createTitle}/>
            <h3>{note.title}</h3>
        </span>}

        <br></br>

        { <span style={{display:"inline-block"}}>
            <AddButton delete={false} handleAdded={addItemToList}/>
            <form>
                <input
                    onChange={makeItem}
                    name="item adder"
                    placeholder="Next item..."
                /> 
         </form>
        </span> 
        }
        <ul>
        {note.items.map(item => 
             <li>{item}</li>
        )}
        </ul>

    </div>);
}

export default ToDoList;