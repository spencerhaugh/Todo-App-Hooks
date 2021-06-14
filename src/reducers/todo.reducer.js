import { v4 as uuid } from 'uuid';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuid(), task: action.task, completed: false }];
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        case "COMPLETE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
        case "UPDATE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo);
        default:
            return state;
    }
};

export default reducer;

// Expect
// { type: "ADD", task: "Walk Dog" }
// { type: "REMOVE", id: 1234 }
// { type: "COMPLETE", id: 1234 }
// { type: "UPDATE", id: 1234, newTask: "Walk the dogs" }