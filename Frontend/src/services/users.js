import axios from 'axios'
const baseURL = 'http://localhost:4000/api/users'

export const getAllUser = async () => {
  const res = await axios.get(baseURL)
  const { data } = res
  return data
}

export const createUser = async ({ userName }) => {
  const res = await axios.post(baseURL, { userName: userName })
  const { data } = res
  return data
}

export const deleteUserId = async (id, users) => {
  const { userName } = users[0]
  await axios.delete(`${baseURL}/${id}`, { userName: userName })
}
