// para que podamos especificar rutas
const { Router } = require('express')
const router = Router()

const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controllers')

router.route('/')
  .get(getNotes)
  .post(createNote)

router.route('/:id')
  .delete(deleteNote)
  .put(updateNote)
  .get(getNote)

module.exports = router
