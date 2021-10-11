import axios from 'axios'
import Config from '../config'

const { DB_API_NOTES } = Config

export const getAllNote = async () => {
  const res = await axios.get(DB_API_NOTES)
  const { data } = res
  return data
}

export const findNoteId = async (id) => {
  const res = await axios.get(`${DB_API_NOTES}/${id}`)
  const { data } = res
  return data
}

export const createNote = async ({ title, content, date, author }) => {
  const res = await axios.post(DB_API_NOTES, { title, content, date, author })
  const { data } = res
  return data
}

export const daleteNoteId = async (id, notes) => {
  const { title, content, date, author } = notes[0]
  await axios.delete(`${DB_API_NOTES}/${id}`, { title, content, date, author })
}

export const uptadteNoteId = async (notes) => {
  console.log(notes)
  const { title, content, date, author, __id } = notes
  await axios.put(`${DB_API_NOTES}/${__id}`, { title, content, date, author })
}
