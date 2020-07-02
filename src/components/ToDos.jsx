import React from "react";
import { ToDoItem } from "./ToDoItem";


export const ToDos = (props) => {

    return (
        <ul>
        {props.toDos.map((toDo, index) => <ToDoItem text={toDo.text} done={toDo.done}  doneChange={() => props.doneChange(index)} delChange={() => props.delChange(index)} />)}
        </ul> 
    )
}


