import { useGlobalState } from './store/darkThemeStore'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// components
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
// pages
import Home from './pages/Home'
import Notes from './pages/Notes'
import Create from './pages/Create'
import User from './pages/User'

function App () {
  const [isDarkMode, setIsDarkMode] = useGlobalState('isDarakMode')

  const setClassesForDarkMode = () => {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
  }

  const setClassesForLightMode = () => {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }

  useEffect(() => {
    isDarkMode ? setClassesForDarkMode() : setClassesForLightMode()
    setIsDarkMode(true)
  }, [])

  useEffect(() => {
    isDarkMode ? setClassesForDarkMode() : setClassesForLightMode()
  }, [isDarkMode])
  return (
    <div>
      <Router>
        <Navigation />
        <div className='todolist'>
          <Switch>
            <Route path='https://luisauter.github.io/spa-notes-app/notes'>
              <Notes />
            </Route>
            <Route path='https://luisauter.github.io/spa-notes-app/edit/:id'>
              <Create />
            </Route>
            <Route path='https://luisauter.github.io/spa-notes-app/create'>
              <Create />
            </Route>
            <Route path='https://luisauter.github.io/spa-notes-app/user'>
              <User />
            </Route>
            <Route path='https://luisauter.github.io/spa-notes-app/' exact>
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
