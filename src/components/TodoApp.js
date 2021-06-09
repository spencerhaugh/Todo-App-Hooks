import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Typography, unstable_createMuiStrictModeTheme } from '@material-ui/core';
import uuid from 'uuid/v4';

function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Walk cats', completed: false },
        { id: 2, task: 'Ship Package', completed: true },
        { id: 3, task: 'Clean kitchen', completed: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
    };
    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos);
    };
    const toggleComplete = (todoId) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };
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
            <Grid container justify='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
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