const { Router } = require('express');
const TaskController = require('../controllers/tasks.controller');
// const  paginate  = require('../middlewares/paginate.mw');

const taskRouter = Router();

taskRouter
  .route('/')
  .get(TaskController.getAllTasks)
  .post(TaskController.createTask);

taskRouter
  .route('/:id')
  .get(TaskController.getTask)
  .patch(TaskController.updateTask)
  .delete(TaskController.deleteTask);

module.exports = taskRouter;
