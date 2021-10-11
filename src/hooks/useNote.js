import { useState, useEffect } from 'react'
import { createNote, getAllNote, daleteNoteId, uptadteNoteId } from '../services/notes'

function useNote () {
  const [note, setNote] = useState([])
  const [delNote, setDelNote] = useState({})

  useEffect(() => {
    const getNoteAll = () => {
      getAllNote().then((notes) => setNote((prev) => prev.concat(notes)))
    }
    getNoteAll()
  }, [])

  useEffect(() => {
    getAllNote().then((data) => {
      setNote(data)
    })
  }, [delNote.title])

  const PostNoteAdd = (data) => {
    console.log(data)
    const newNote = {
      title: data.title,
      content: data.content,
      date: data.date,
      author: data.selectUser,
      __id: data.__id
    }
    console.log(data.__id, 'useNOTES')
    if (data.editing) {
      uptadteNoteId(newNote).then((message) => message)
    } else {
      createNote(newNote).then((data) => {
        setNote(prev => [...prev, data])
      })
    }
  }
  const handleDeleteNote = (id) => {
    const notes = note.filter(note => note._id === id)
    const { title } = notes[0]
    daleteNoteId(id, notes).then(() => {
      setDelNote(prev => ({ ...prev, title }))
    })
  }
  return { note, PostNoteAdd, handleDeleteNote }
}

export default useNote
