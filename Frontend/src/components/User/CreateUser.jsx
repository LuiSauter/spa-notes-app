import Row from './style'
import { useForm } from 'react-hook-form'
import Button from '../Button'

const CreateUser = ({ getUser, handleNewUser, deleteUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data, e) => {
    handleNewUser(data)
    e.target.reset()
  }

  return (
    <Row>
      <div className='row-item'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='div'>
            <input
              placeholder='Created a new user'
              type='text'
              {...register('userName', { required: true, pattern: /^[A-Za-z]+$/i })}
            />
            <button>Save</button>
          </div>
          <div>
            {errors.userName && <span>*Must not have spaces</span>}
          </div>
        </form>
      </div>
      <div className='row-item__users'>
        <ul>
          {
            getUser.map(user => (
              <li key={user._id}>
                <div className='header'>{user.userName}</div>
                <div className='button'>
                  <Button
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </Row>
  )
}

export default CreateUser
