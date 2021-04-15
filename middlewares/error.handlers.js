module.exports = async (err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).send({
    errors: [{ message: 'Server error', code: 500, ...err }],
  });
};
