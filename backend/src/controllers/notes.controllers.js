const notesCtrl = {}

const NoteModel = require('../models/Note') // con este modelo podemos hacer todo

notesCtrl.getNotes = async (req, res) => {
  // todo esto devolvemos a la app cliente
  const notes = await NoteModel.find() // Este metodo consulta todos los datos [{}]
  res.json(notes)
}

notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body

  if (!title) {
    return res.status(400).json({
      error: 'required "title" field is missing'
    })
  }

  const newNote = new NoteModel({
    title,
    content,
    date,
    author
  })

  try {
    const note = await newNote.save()
    res.status(201).json(note)
  } catch (error) {
    console.log(error)
  }
}

notesCtrl.getNote = async (req, res, next) => {
  try {
    const note = await NoteModel.findById(req.params.id)
    if (note) res.json(note)
    else res.status(404).end()
  } catch (error) {
    next(error)
  }
}

notesCtrl.updateNote = async (req, res, next) => {
  const { title, content, date, author } = req.body

  await NoteModel.findOneAndUpdate({ _id: req.params.id }, {
    title,
    content,
    date,
    author
  })

  res.json({ message: 'Note Updated' })
}

notesCtrl.deleteNote = async (req, res, next) => {
  await NoteModel.findByIdAndDelete(req.params.id)

  res.status(204).json({ message: 'Note Deleted' })
}

module.exports = notesCtrl
