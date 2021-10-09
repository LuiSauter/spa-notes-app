module.exports = (error, req, res, next) => {
  if (error.name === 'CastError') {
    res.status(400).send({ error: 'id used in malformed' })// bad request
  } else {
    res.status(500).end()// error from server
  }
}
