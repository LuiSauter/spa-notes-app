import axios from 'axios'
import Config from '../config'

const { DB_API_USERS } = Config

export const getAllUser = async () => {
  const res = await axios.get(DB_API_USERS)
  const { data } = res
  return data
}

export const createUser = async ({ userName }) => {
  const res = await axios.post(DB_API_USERS, { userName: userName })
  const { data } = res
  return data
}

export const deleteUserId = async (id, users) => {
  const { userName } = users[0]
  await axios.delete(`${DB_API_USERS}/${id}`, { userName: userName })
}
