import { Navbar } from './components/Navbar'
import { Route, Switch } from 'wouter'
import { Home } from './pages/Home'
import Heroes from './pages/Heroes'
import HeroesDetail from './pages/HeroesDetail'

function App() {
  
  return (
    <>
      <Navbar>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/heroes' component={Heroes} />
          <Route path='/heroes/:heroesName' component={HeroesDetail} />

        </Switch>
      </Navbar>
    </>
  )
}

export default App
