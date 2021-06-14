import React, { useContext, memo } from 'react';
import UpdateItemForm from './UpdateItemForm';
import useToggleState from '../hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { DispatchContext } from '../contexts/todos.context';


function Todo({ task, completed, id }) {
    const dispatch = useContext(DispatchContext);
    const [editing, toggleEditing] = useToggleState(false);
    return (
        <ListItem style={{ height: '64px' }}>
            {
                editing ?
                    <UpdateItemForm
                        task={task}
                        id={id}
                        toggleEditing={toggleEditing}
                    />
                    :
                    <>
                        <Checkbox tabIndex={-1} checked={completed} onChange={() => dispatch({ type: "COMPLETE", id: id })} />
                        <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                    </>
            }
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit' onClick={() => toggleEditing(!editing)}>
                    {editing ? <CloseIcon /> : <EditIcon />}
                </IconButton>
                <IconButton aria-label='Delete' onClick={() => dispatch({ type: "REMOVE", id: id })}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default memo(Todo);
