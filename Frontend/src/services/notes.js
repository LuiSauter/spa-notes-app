import axios from 'axios'
const baseURL = 'http://localhost:4000/api/notes'

export const getAllNote = async () => {
  const res = await axios.get(baseURL)
  const { data } = res
  return data
}

export const findNoteId = async (id) => {
  const res = await axios.get(`${baseURL}/${id}`)
  const { data } = res
  return data
}

export const createNote = async ({ title, content, date, author }) => {
  const res = await axios.post(baseURL, { title, content, date, author })
  const { data } = res
  return data
}

export const daleteNoteId = async (id, notes) => {
  const { title, content, date, author } = notes[0]
  await axios.delete(`${baseURL}/${id}`, { title, content, date, author })
}

export const uptadteNoteId = async (notes) => {
  console.log(notes)
  const { title, content, date, author, __id } = notes
  await axios.put(`${baseURL}/${__id}`, { title, content, date, author })
}
