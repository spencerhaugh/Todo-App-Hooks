import React, { useState } from 'react';
import TodoList from './TodoList';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Walk cats', completed: false },
        { id: 2, task: 'Ship Package', completed: false },
        { id: 3, task: 'Clean kitchen', completed: false }
    ]
    const [todos, useTodos] = useState(initialTodos);
    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: '100vh',
            backgroundColor: '#fafafa'
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }} >
                <Toolbar>
                    <Typography color='inherit'>Todos with Hooks</Typography>
                </Toolbar>
            </AppBar>
            <TodoList todos={todos} />
        </Paper>
    )
}

export default TodoApp;

// wireframe:
// TodoApp
// -TodoForm
// -TodoList
//     -TodoItems

// Each Item
// id, task, completed