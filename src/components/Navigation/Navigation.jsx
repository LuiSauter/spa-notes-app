import Nav from './style'
import { NavLink } from 'react-router-dom'
import ButtonToggleTheme from './ButtonToggle/ButtonToggleTheme'

const Navigation = () => {
  return (
    <Nav>
      <div className='nav-button'>
        <NavLink to='/spa-notes-app/' exact className='link' activeClassName='current'>
          <div>
            <span><b>Home</b></span>
            <i className='fas fa-home' />
          </div>
        </NavLink>
      </div>

      <div className='nav-button'>
        <NavLink to='/spa-notes-app/notes' className='link' activeClassName='current'>
          <div>
            <span><b>Notes</b></span>
            <i className='far fa-clipboard' />
          </div>
        </NavLink>
      </div>

      <div className='nav-button'>
        <NavLink to='/spa-notes-app/create' className='link' activeClassName='current'>
          <div>
            <span><b>Create Note</b></span>
            <i className='fas fa-plus-square' />
          </div>
        </NavLink>
      </div>
      <div className='nav-button'>
        <NavLink to='/spa-notes-app/user' className='link' activeClassName='current'>
          <div>
            <span><b>User</b></span>
            <i className='fas fa-user' />
          </div>
        </NavLink>
      </div>
      <ButtonToggleTheme />
    </Nav>
  )
}

export default Navigation
