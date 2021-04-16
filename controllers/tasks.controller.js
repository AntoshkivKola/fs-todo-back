const { Task } = require('../models');
const createError = require('http-errors');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;
    const task = await Task.create(body);

    if (!task) {
      return next(createError(400));
    }

    res.status(201).send({
      data: [task],
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const { pagination } = req;
    const tasks = await Task.findAll({
      ...pagination,
    });

    if (!tasks?.length) {
      return next(createError(404));
    }

    res.status(200).send({
      data: tasks,
    });
  } catch (err) {
    next(err);
  }
};
module.exports.getTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const task = await Task.findByPk(id);

    if (!task) {
      return next(createError(404, 'Task not found'));
    }

    res.status(200).send({
      data: [task],
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const [, [updatedTask]] = await Task.update(body, {
      where: { id },
      returning: true,
    });

    if (!updatedTask) {
      return next(createError(404, 'Task not found'));
    }

    res.status(200).send({
      data: [updatedTask],
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const rowsCount = await Task.destroy({
      where: { id },
    });

    if (rowsCount === 0) {
      return next(createError(404, 'Task not found'));
    }

    res.status(200).send({
      data: [rowsCount],
    });
  } catch (err) {
    next(err);
  }
};
