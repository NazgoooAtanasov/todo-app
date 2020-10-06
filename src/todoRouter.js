import express from 'express';

import { createTodo, deleteTodo, findTodo } from './services/todoService.js';

const todoRouter = express.Router();

todoRouter.get('/', (req, res) => {
    res.json("here");
});

todoRouter.post('/new', async(req, res) => {
    const {task, issuer, turnInDate} = req.body;
    const operation = await createTodo({
        task:task,
        issuer:issuer,
        issueDate: new Date(),
        turnInDate: turnInDate,
    });
    res.json(operation);
});

todoRouter.get('/find/:task', async (req, res) => {
    const {
        task
    } = req.params;
    const operation = await findTodo(task);
    res.json(operation);
});

todoRouter.delete('/delete/:task', async (req,res)=>{
    const {task} = req.params;
    const operation = await deleteTodo(task);
    res.json(operation);
});

export default todoRouter;