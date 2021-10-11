import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import useNote from '../../hooks/useNote'
import Container from './styleListNotes'
import Button from '../Button'

function ListNotes () {
  const { note, handleDeleteNote } = useNote()
  return (
    <Container>
      {
        note.map(data => (
          <div key={data._id} className='container-item'>
            <div className='container-item__header'>
              <div>
                <p className='paragraph'>{data.title}</p>
              </div>
              <div className='container-item__footer'>
                <Button onClick={() => handleDeleteNote(data._id)}>Delete</Button>
                <Link to={`/edit/${data._id}`}>
                  <Button className='link'>Edit</Button>
                </Link>
              </div>
            </div>
            <div className='container-item__content'>
              <p className='paragraph'>{data.content}</p>
              <p><i class='far fa-user' /> {data.author}</p>
              <p style={{ color: (format(data.date).indexOf('in') !== -1) ? 'green' : '#C02739' }}>{format(data.date)}</p>
            </div>
          </div>
        ))
      }
    </Container>
  )
}

export default ListNotes
