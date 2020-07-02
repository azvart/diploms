import React from 'react';
import { useState } from 'react';
import { ToDos } from './ToDos';

export const AddToDo = (props) => {
    const [item, setItem] = useState('');

    return (
        <>
            <input value={item} onChange={(e) => setItem(e.target.value)}></input>
            <button onClick={() => props.addItem(item)}>Add</button>
            <ToDos toDos={props.toDos} doneChange={props.doneChange} delChange={props.delChange} ></ToDos>
        </>
    )
}

// { addItem, toDos, doneChange, delChange }