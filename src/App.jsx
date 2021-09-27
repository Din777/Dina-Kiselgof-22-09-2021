import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'
import { Fav } from './pages/Fav.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'

export function App() {
  return (<React.Fragment>
    <div className="app">
      <AppHeader />
      <Switch>
        <Route component={Fav} path="/favorites" />
        <Route component={Home} path="/" />
      </Switch>
      <AppFooter />
    </div>
  </React.Fragment>
  )
}
