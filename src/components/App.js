import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import SearchView from './containers/SearchView';
import ReleaseView from './containers/ReleaseView';
import DisplaySongs from './containers/DisplaySongs';
import DisplayLyrics from './containers/DisplayLyrics';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lyrics/:artist/:songTitle" component={DisplayLyrics} />
        <Route path="/release/:artistName/:id" component={DisplaySongs} />
        <Route path="/artist/:artistName/:id" component={ReleaseView} />
        <Route exact path="/" component={SearchView} />
      </Switch>
    </Router>
  );
}

export default App; 

