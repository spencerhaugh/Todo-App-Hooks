import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
    { id: 1, task: 'Walk cats', completed: false },
    { id: 2, task: 'Ship Package', completed: true },
    { id: 3, task: 'Clean kitchen', completed: false }
]

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todoStuff = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={todoStuff}>
            {props.children}
        </TodosContext.Provider>
    );
};
