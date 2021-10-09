const { Router } = require('express')
const router = Router()

const { getUsers, createUser, deleteUser, updateUser, getUser } = require('../controllers/users.controllers')

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:id')
  .delete(deleteUser)
  .put(updateUser)
  .get(getUser)

module.exports = router
