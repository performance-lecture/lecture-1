import React, {Suspense, lazy} from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
// import ListPage from './pages/ListPage/index'
// import ViewPage from './pages/ViewPage/index'

const ListPage = lazy(() => import('./pages/ListPage/index'))
const ViewPage = lazy(() => import('./pages/ViewPage/index'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>로딩 중...</div>}>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
