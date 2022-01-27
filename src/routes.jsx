import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Details } from './pages/Details';
import { Home } from './pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}