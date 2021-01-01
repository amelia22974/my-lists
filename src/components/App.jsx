import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToDoList from "./ToDoList";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newTitle, newItems){
        setNotes( prevNotes => {
            return ([...prevNotes, { title: newTitle, items: newItems}]);
        })
    }


    return <div id="stage-container">
        <div id="content-wrap">
            <Header />

            <ToDoList />

        </div>
    </div>
}

export default App;