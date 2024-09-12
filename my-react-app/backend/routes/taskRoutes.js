import express from 'express'
import Task from '../models/taskModel.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/', async (req, res) => {
    const task = new Task({
        text: req.body.text
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Task.findByIdAndDelete(id);

        if (!result) {
            return response.status(200).send({message: error.message});
        }

        return res.status(200).send({message: 'Task deleted successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({message: 'Task not found'});
        }
        task.text = req.body.text;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

export default router;
