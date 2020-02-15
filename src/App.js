import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import ListPage from './pages/ListPage/index'
import ViewPage from './pages/ViewPage/index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ListPage} exact />
        <Route path="/view/:id" component={ViewPage} exact />
      </Switch>
    </div>
  )
}

export default App
