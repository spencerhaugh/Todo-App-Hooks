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

// { type: "ADD", task: "Walk Dog" }
// { type: "REMOVE", id: 1234 }
// { type: "COMPLETE", id: 1234 }
// { type: "UPDATE", id: 1234, newTask: "Walk the dogs" }


//  OLD METHODS FROM useTodoState hook:

// addTodo: newTodoText => {
//     setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
// },
//     removeTodo: (todoId) => {
//         const updatedTodos = todos.filter(todo => todo.id !== todoId)
//         setTodos(updatedTodos);
//     },
//         toggleComplete: (todoId) => {
//             const updatedTodos = todos.map(todo =>
//                 todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//             );
//             setTodos(updatedTodos);
//         },
// updateTodo: (todoId, newTask) => {
//     const updatedTodos = todos.map(todo =>
//         todo.id === todoId ? { ...todo, task: newTask } : todo
//     );
//     setTodos(updatedTodos);
// }