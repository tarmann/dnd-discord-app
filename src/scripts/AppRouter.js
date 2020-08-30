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
        <CharListLoader />
      </Route>
    </Switch>
  )
}

const AppRouter = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <AppRoutes />
  </Router>
)

export default AppRouter;