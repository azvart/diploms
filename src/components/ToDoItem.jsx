import React from "react";

export const ToDoItem = (props) => {
  
    return (
        <li>
        <input type="checkbox"  onChange={props.doneChange} />
        {props.text}
        <button onClick={props.delChange}>x</button>
        </li>  
        
    )
}





