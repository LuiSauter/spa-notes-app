import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// components
import Navigation from './components/Navigation/Navigation'
// pages
import Home from './pages/Home'
import Notes from './pages/Notes'
import Create from './pages/Create'
import User from './pages/User'

function App () {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/notes'>
          <Notes />
        </Route>
        <Route path='/edit/:id'>
          <Create />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/user'>
          <User />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
