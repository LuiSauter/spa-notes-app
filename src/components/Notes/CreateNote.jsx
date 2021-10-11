// import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { useEffect, useState } from 'react'
import Div from './styleCreate'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '../Button'
import { useParams } from 'react-router-dom'
import { findNoteId } from '../../services/notes'

const initalValue = {
  selectUser: '',
  title: '',
  content: '',
  date: new Date(),
  editing: false,
  __id: ''
}

const CreateNote = ({ getUser, PostNoteAdd }) => {
  const [data, setData] = useState(initalValue)
  const { id } = useParams()

  useEffect(() => {
    if (typeof id === 'undefined') return
    findNoteId(id).then(noteFound => {
      const note = { ...data }
      setData({
        ...note,
        editing: true,
        __id: id,
        selectUser: noteFound.author,
        title: noteFound.title,
        content: noteFound.content,
        date: new Date(noteFound.date)
      })
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.selectUser === '') return
    PostNoteAdd(data)
    window.location.href = '/notes'
    setData(initalValue)
  }

  const onInputChange = (e) => {
    const note = { ...data }
    setData({
      ...note,
      [e.target.name]: e.target.value
    })
  }

  const onChangeDate = (date) => {
    const note = { ...data }
    setData({
      ...note,
      date: date
    })
  }

  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <label>User</label>
        <select
          name='selectUser'
          onChange={onInputChange}
          required
          value={data.selectUser}
        >
          <option value=''>Select a user ...</option>
          {
            getUser.map(user =>
              <option key={user._id} value={user.userName}>
                {user.userName}
              </option>)
          }
        </select>
        <label>Note title</label>
        <input
          placeholder='Title'
          type='text'
          name='title'
          required
          onChange={onInputChange}
          value={data.title}
        />
        <label>Note description</label>
        <input
          placeholder='description'
          type='text'
          name='content'
          required
          onChange={onInputChange}
          value={data.content}
        />
        <label>Select a date</label>
        <DatePicker
          selected={data.date}
          onChange={onChangeDate}
        />
        <Button>
          {data.editing ? 'Update' : 'save'}
        </Button>
      </form>
    </Div>
  )
}

export default CreateNote
