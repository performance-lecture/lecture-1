import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";

const ListPage = lazy(() => import("./pages/ListPage/index"));
const ViewPage = lazy(() => import("./pages/ViewPage/index"));

function App() {
  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
