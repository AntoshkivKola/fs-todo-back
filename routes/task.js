const { Router } = require('express');
const TaskController = require('../controllers/tasks.controller');
// const  paginate  = require('../middlewares/paginate.mw');

const taskRouter = Router();

taskRouter.get('/', TaskController.getAllTasks);
taskRouter.post('/', TaskController.createTask);

taskRouter.get('/:id', TaskController.getTask);
taskRouter.patch('/:id', TaskController.updateTask);
taskRouter.delete('/:id', TaskController.deleteTask);

module.exports = taskRouter;
