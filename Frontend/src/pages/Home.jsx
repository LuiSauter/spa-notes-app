import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ListNotes from '../components/Notes/ListNotes'
import SubTitles from '../components/SubTitles'
import Technologies from '../components/Technologies/Technologies'

function Home () {
  return (
    <div>
      <SubTitles>TODO LIST NOTES</SubTitles>
      <Hero>
        <div className='hero-item'>
          <Link to='/user'>
            <p>
              <i className='fas fa-user-plus' />
              <br />
              <b>Create a new user</b>
            </p>
          </Link>
        </div>
        <div className='hero-item'>
          <Link to='/create'>
            <p>
              <i className='fas fa-clipboard' />
              <br />
              <b>Create a new note</b>
            </p>
          </Link>
        </div>
      </Hero>
      <ListNotes />
      <Technologies />
    </div>
  )
}

export default Home
