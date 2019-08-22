import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import SearchView from './containers/SearchView';
import ReleaseView from './containers/ReleaseView';
import DisplaySongs from './containers/DisplaySongs';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/release/:artist/:release/:id" component={DisplaySongs} />
        <Route path="/artist/:id" component={ReleaseView} />
        <Route path="/" component={SearchView} />
      </Switch>
    </Router>
  );
}

export default App; 

