import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Bookmarks } from './pages/Bookmarks';
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

        <Route exact path="/details/:name">
          <Details />
        </Route>

        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}