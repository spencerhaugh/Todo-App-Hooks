import React, {useContext} from 'react';
import UpdateItemForm from './UpdateItemForm';
import useToggleState from '../hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {TodosContext} from '../contexts/todos.context';


export default function Todo({ task, completed, id }) {
    const {removeTodo, toggleComplete} = useContext(TodosContext);
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
