import React from 'react';
import ReactDOM from 'react-dom';
import '../src/components/style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from './components/movies'
import {Link} from 'react-router-dom'
import MovieDetail from './components/movieDetail';

ReactDOM.render(
  <div>
    <Router>
        <Link to="/components/movieDetail"></Link>
      <Switch>
        <Route  path="/components/movieDetail" component={MovieDetail}>
          <MovieDetail />
        </Route>
        <Route  exact path="/" >
          <App />
        </Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
