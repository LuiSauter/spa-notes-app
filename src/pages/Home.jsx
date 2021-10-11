import { Link } from 'react-router-dom'
import Hero from '../styles/Hero'
import Loading from '../components/Loading/Loading'
import ListNotes from '../components/Notes/ListNotes'
import SubTitles from '../styles/SubTitles'
import Technologies from '../components/Technologies/Technologies'
import useFetch from '../hooks/useFetch'

function Home () {
  const { loading } = useFetch()
  return (
    <div>
      <SubTitles>TODO LIST NOTES</SubTitles>
      <Hero>
        <div className='hero-item'>
          <Link to='/spa-notes-app/user'>
            <p>
              <i className='fas fa-user-plus' />
              <br />
              <b>Create a new user</b>
            </p>
          </Link>
        </div>
        <div className='hero-item'>
          <Link to='/spa-notes-app/create'>
            <p>
              <i className='fas fa-clipboard' />
              <br />
              <b>Create a new note</b>
            </p>
          </Link>
        </div>
      </Hero>
      {
        loading ? <Loading /> : ''
      }
      <ListNotes />
      <Technologies />
    </div>
  )
}

export default Home
