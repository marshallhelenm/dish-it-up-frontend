import React, { Component } from 'react';
import './App.css';
import Dashboard from './containers/Dashboard'
import SearchForm from './containers/SearchForm'
import LoginPage from './containers/LoginPage'
import NavBar from './containers/NavBar'
import Pantry from './containers/Pantry'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  state={
    query: '',
    logged_in: true
    
  }

  changeQuery = (searchTerm) => {
    console.log(searchTerm)
    this.setState((prevState) => ({
      query: searchTerm
    }),() => this.fetchRecipes())
  }

  fetchRecipes = () => {
    console.log('fetchin those recipes')
    console.log(this.state.query)
    let searchTerm = this.state.query
    fetch('http://localhost:3000/getrecipes',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        searchTerm: searchTerm
      })
    })
    .then(response => response.json())
    .then(json => console.log(json))
    
  }

  isLoggedIn = () => {
    }
  

  render(){
    return (
    <div className="App">
      <Router>
        <NavBar />
          {this.state.logged_in ? 
          <Route
            path="/"
            exact
            render={() => <Dashboard />}
          /> : 
          <Route
            path="/"
            exact
            render={() => <LoginPage />}
          />
          }
          <Route
            path="/search"
            render={() => <SearchForm />}
          />
          <Route
            path="/pantry"
            render={() => <Pantry />}
          />
        </Router>

    </div>
    );
  }

}

export default App;


// <Router>
// {(this.state.logged_in) ?
// // <Route path='/' render={ props => <NavBar />} />,
// <Route path='/' exact render={ props => <Dashboard onRecipeInput={this.changeQuery} />} />
// :
//   <Route path='/' exact render={props => <LoginPage />} />
// }
// </Router>