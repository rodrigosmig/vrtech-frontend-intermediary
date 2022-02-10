import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Details } from './pages/Details';
import { Home } from './pages/Home';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/details/:name">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}