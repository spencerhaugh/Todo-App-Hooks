import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';


function TodoList({ todos, removeTodo, toggleComplete, updateTodo }) {
    return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleComplete={toggleComplete}
                            updateTodo={updateTodo}
                        />
                        {i < todos.length - 1 && <Divider />}
                        {/* Cleans up bottom of list: No divider on last item */}
                    </>
                ))}
            </List>
        </Paper>
    )
};

export default TodoList;