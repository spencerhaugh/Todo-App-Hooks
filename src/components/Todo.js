import React from 'react';
import UpdateItemForm from './UpdateItemForm';
import useToggleState from '../hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function Todo({ task, completed, id, removeTodo, toggleComplete, updateTodo }) {
    const [editing, toggleEditing] = useToggleState(false);
    return (
        <ListItem>
            {
                editing ?
                    <UpdateItemForm
                        task={task}
                        updateTodo={updateTodo}
                        id={id}
                        toggleEditing={toggleEditing}
                    />
                    :
                    <>
                        <Checkbox tabIndex={-1} checked={completed} onChange={() => toggleComplete(id)} />
                        <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                    </>
            }
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit' onClick={() => toggleEditing(!editing)}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
