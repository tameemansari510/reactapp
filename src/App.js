import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import MovieForms from './components/movieForms';
import './App.css';
import LoginForm from './components/loginForm';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <NavBar/>
        <main className='container'>
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/movies/:id' component={MovieForms} />
            <Route path='/movies' component={Movies} />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies'/>
            <Route to='/not-found'/>
          </Switch>
        </main>
      </React.Fragment>
      
    );
  }
}

export default App;
