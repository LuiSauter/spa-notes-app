import { useGlobalState } from '../../../store/darkThemeStore'
import Button from './styleToggle'

function ButtonToggleTheme () {
  const [isDarkMode, setIsDarkMode] = useGlobalState('isDarakMode')
  const handleClick = () => setIsDarkMode(!isDarkMode)

  return (
    <Button
      onClick={handleClick}
      name='toggle dark mode'
    >
      <div className={`sun sun-logo ${!isDarkMode ? 'animate-hide-sun' : ''}`}>
        <i className='fas fa-sun' />
      </div>
      <div
        className={`moon moon-logo ${!isDarkMode ? 'animate-show-moon' : ''}`}
      >
        <i className='fas fa-moon' />
      </div>
    </Button>
  )
}

export default ButtonToggleTheme
