import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToDoList from "./ToDoList";

function App(){
    return <div id="stage-container">
        <div id="content-wrap">
            <Header />

            <ToDoList />
            <ToDoList />
            <ToDoList />
            <ToDoList />

        </div>
    </div>
}

export default App;