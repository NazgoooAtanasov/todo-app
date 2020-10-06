import {
    deletedTodo,
    successfullyCreatedTodo,
    taskNameNotFree,
    todoDoesntExist
} from '../applicationDefaults.js';
import todoSchema from '../schemas/todos/todoSchema.js';
import {
    validateTodo
} from '../schemas/todos/todoSchemaValidation.js';

// create
const createTodo = async (todo) => {
    const validation = validateTodo(todo);
    if (validation === "valid") {
        const taskNameCheck = await isTaskNameFree(todo.task);
        if (taskNameCheck) {
            await todoSchema.create(todo);
            return successfullyCreatedTodo;
        }

        return taskNameNotFree;
    }

    return validation;
}

// delete
const deleteTodo = async (taskName) => {
    const todo = await findTodo(taskName);

    if (todo) {
        await todoSchema.deleteOne({
            task: taskName
        }, (err) => console.log(err));
        return deletedTodo;
    }

    return todoDoesntExist;
}

// Todo: create update functionality
const updateTodo = async (taskName) => {

}

// check if exists
const isTaskNameFree = async (taskName) => {
    const check = await findTodo(taskName);
    return check == null;
}

// find todo
const findTodo = (taskName) => {
    return todoSchema.findOne({
        task: taskName
    });
}

export {
    createTodo,
    deleteTodo,
    findTodo
};