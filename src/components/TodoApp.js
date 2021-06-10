import React from 'react';
import useTodoState from '../hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Walk cats', completed: false },
        { id: 2, task: 'Ship Package', completed: true },
        { id: 3, task: 'Clean kitchen', completed: false }
    ];

    // Custom hook for all the functionality
    const { todos, addTodo, removeTodo, updateTodo, toggleComplete } = useTodoState(initialTodos);

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
                    <Typography color='inherit'>TaskList: A Chore Tracker</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleComplete={toggleComplete}
                        updateTodo={updateTodo}
                    />
                </Grid>
            </Grid>
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