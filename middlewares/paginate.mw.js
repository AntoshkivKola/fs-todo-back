module.exports = maxLimit => async (req, res, next) => {
  try {
    const {
      query: { limit, offset },
    } = req;
    req.pagination = {
      limit: !limit || limit > maxLimit || limit <= 0 ? maxLimit : limit,
      offset: !offset || offset <= 0 ? 0 : offset,
    };
    next();
  } catch (err) {
    next(err);
  }
};
