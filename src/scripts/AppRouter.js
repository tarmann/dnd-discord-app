import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

import CharacterSheetLoader from './components/CharacterSheetLoader';
import CharListLoader from './components/CharListLoader';

const CharRoute = () => {
  let { charId } = useParams();
  
  return (
    <CharacterSheetLoader charId={charId} />
  )
}

const AppRoutes = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path="/chars">
        <CharListLoader />
      </Route>

      <Route path="/char/:charId">
        <CharRoute />
      </Route>
      
      <Route path={match.path}>
        <div>Nothing here...</div>
      </Route>
    </Switch>
  )
}

const AppRouter = () => (
  <Router>
    <AppRoutes />
  </Router>
)

export default AppRouter;