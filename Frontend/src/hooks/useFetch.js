import { useState, useEffect } from 'react'
import { getAllUser, createUser, deleteUserId } from '../services/users'

const useFetch = () => {
  const [getUser, setUser] = useState([])
  const [delUser, setDelUser] = useState({})

  useEffect(() => {
    const getUserAll = () => {
      getAllUser().then((data) => setUser((prev) => prev.concat(data)))
    }
    getUserAll()
  }, [])

  useEffect(() => {
    getAllUser().then((data) => {
      setUser(data)
    })
  }, [delUser.userName])

  const handleNewUser = (data) => {
    const { userName } = data
    const newUser = {
      userName: userName.replace(/ /g, '')
    }
    if (userName !== userName.replace(/ /g, '')) return
    createUser(newUser).then((data) => {
      setUser((prev) => prev.concat(data))
    })
  }

  const deleteUser = (id) => {
    const users = getUser.filter(user => user._id === id)
    const { userName } = users[0]
    deleteUserId(id, users).then(() => {
      setDelUser(prev => ({ ...prev, userName }))
    })
  }

  return { getUser, handleNewUser, deleteUser }
}

export default useFetch
