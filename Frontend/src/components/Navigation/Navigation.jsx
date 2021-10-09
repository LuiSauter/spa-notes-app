import Nav from './style'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <Nav>
      <div className='nav-button'>
        <NavLink to='/' exact className='link' activeClassName='current'>
          <div>
            <span>Home</span>
            <i className='fas fa-home' />
          </div>
        </NavLink>
      </div>

      <div className='nav-button'>
        <NavLink to='/notes' className='link' activeClassName='current'>
          <div>
            <span>Notes</span>
            <i className='far fa-clipboard' />
          </div>
        </NavLink>
      </div>

      <div className='nav-button'>
        <NavLink to='/create' className='link' activeClassName='current'>
          <div>
            <span>Create Note</span>
            <i className='fas fa-plus-square' />
          </div>
        </NavLink>
      </div>
      <div className='nav-button'>
        <NavLink to='/user' className='link' activeClassName='current'>
          <div>
            <span>User</span>
            <i className='fas fa-user' />
          </div>
        </NavLink>
      </div>
    </Nav>
  )
}

export default Navigation
