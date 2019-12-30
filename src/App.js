import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import ListPage from './pages/ListPage'
import ViewPage from './pages/ViewPage'

function App() {
  return (
		<div className="App">
			<Switch>
				<Route path="/" component={ListPage} exact />
				<Route path="/view" component={ViewPage} exact />
			</Switch>
		</div>
  );
}

export default App;
