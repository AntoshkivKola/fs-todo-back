const { ValidationError, DatabaseError } = require('sequelize');

module.exports = async (err, req, res, next) => {
  if (err instanceof ValidationError) {
    if (err.errors[0].message === 'Validation notEmpty on body failed') {
      res.status(400).send({
        errors: [
          {
            message: 'body can`t be empty!',
            code: 400,
          },
        ],
      });
    }
    if (err.errors[0].message === 'Error: Deadline can`t be in the past!') {
      res.status(416).send({
        errors: [
          {
            message: 'Deadline can`t be in the past!',
            code: 416,
          },
        ],
      });
    }
  }
  if (err instanceof DatabaseError) {
    if (err.parent.code === '22001') {
      res.status(411).send({
        errors: [
          {
            message: 'body must be shorter than 255 characters!',
            code: 411,
          },
        ],
      });
    }
  }
  next(err);
};
