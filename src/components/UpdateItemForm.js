import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from '../hooks/useInputState';

export default function UpdateItemForm({ task, id, updateTodo, toggleEditing }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={e => {
            e.preventDefault();
            updateTodo(id, value);
            reset();
            toggleEditing();
        }}
            style={{ marginLeft: '1rem', width: '60%' }}
        >
            <TextField
                value={value}
                margin='normal'
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}
