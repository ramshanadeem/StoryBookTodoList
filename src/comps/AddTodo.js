import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button1 from './Button';
import Todos1 from './Todos1';
import AddForm from './AddForm'
function AddTodo() {

    const [todos, settodos] = useState([{ title: 'buy milk', id: 1 }, { title: 'prepare tea', id: 2 }])
    const [task, settask] = useState({ title: '', id: '' })
    const handleChange = (e) => {
        settask({ title: e.target.value, id: uuidv4() })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        settodos([...todos, task])
        e.target.firstChild.value = '';

    }
    console.log(todos)
    return (
        <div><h4 style={{ textAlign: 'center' }}>TODO LIST</h4>
            {/* <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange}></input>
                <Button1 type="submit" text="ADD" />
            </form> */}
            <AddForm handleSubmit={handleSubmit} handleChange={handleChange}>
                <input type='text' onChange={handleChange}></input>
                <Button1 type="submit" text="ADD" />
            </AddForm>
            <Todos1 todolist={todos} />
        </div>
    )
}

export default AddTodo