const { Router } = require('express');
const taskRouter = require('./task');

const router = Router();

router.use('/tasks', taskRouter);

module.exports = router;