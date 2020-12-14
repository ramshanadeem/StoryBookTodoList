import React from 'react'
import Button1 from './Button';
function AddForm(handleSubmit, handleChange) {
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange}></input>
            <Button1 type="submit" text="ADD" />
        </form>
    )
}
export default AddForm;