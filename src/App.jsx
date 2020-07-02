import React from 'react';
import { ToDos } from './components/ToDos';
import { AddToDo } from './components/AddToDo';
import { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Nav } from './components/Nav';



export const App = () => {

    const [toDos, setToDos] = useState([]);
    const addToDo = (toDo) => {
        setToDos([...toDos, toDo])
    }

    const doneChange = () => {
        
        

    }

    const delChange = () => {
        
     
    }

    return (
        <BrowserRouter>
            <Nav></Nav>
            <Route path="/add" render={() => <AddToDo addItem={(item) => addToDo({ text: item, done: '', del: '' })} toDos={toDos} doneChange={doneChange} delChange={delChange}></AddToDo>} ></Route>
            <Route path="/complete" render={() => <ToDos toDos={toDos} doneChange={doneChange} delChange={delChange} ></ToDos>}></Route>
            <Route path="/delete" render={() => <ToDos toDos={toDos} doneChange={doneChange} delChange={delChange}></ToDos>}></Route>
            {/* //<AddToDo addItem={(item) => addToDo({ text: item })} /> */}
        </BrowserRouter>
    )

}
// setToDos(toDos.map((toDo, index) => ind === index ? { ...toDo, del: !toDo.del } : toDo));