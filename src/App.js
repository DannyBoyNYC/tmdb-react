import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PopularMovies from "./PopularMovies";
import Movie from "./Movie";

function App() {
  return (
    <main className="App">
      <header>
        <h1>Movies</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <PopularMovies />
          </Route>
          <Route path="/movie/:movieId">
            <Movie />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
