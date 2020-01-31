import React, { Component } from "react";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import SearchPage from "./containers/SearchPage";
import UnderConstruction from "./containers/UnderConstruction";
import Cookbook from "./containers/Cookbook";
import Pantry from "./containers/Pantry";
import Cart from "./containers/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignupPage from "./containers/SignupPage";
import NavBar2 from "./containers/NavBar2";
import LoginPage from "./containers/LoginPage";

const BASE_URL = "https://dish-backend.herokuapp.com/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      searchFunction: "",
      logged_in: false,
      searchResults: []
    };
  }

  logIn = userHash => {
    console.log("loggin in!", userHash);
    fetch(BASE_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userHash)
    })
      .then(response => response.json())
      .then(user => {
        if (user.error) {
          alert("Invalid credentials");
        } else {
          console.log("user: ", user);
          localStorage.setItem("user_id", user.id);
          this.setState({ logged_in: true });
        }
      });
    // this.setState(prevState => {
    //   ...prevState,
    //   currentUser:
    // })
  };

  signUp = userHash => {
    console.log("signing up in!", userHash);
    fetch(BASE_URL + "signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userHash)
    })
      .then(response => response.json())
      .then(user => {
        console.log(user);
        if (user.error) {
          alert("Invalid credentials");
        } else {
          localStorage.setItem("user_id", user.id);
          this.setState({ logged_in: true });
        }
      });
    // this.setState(prevState => {
    //   ...prevState,
    //   currentUser:
    // })
  };

  logOut = () => {
    localStorage.setItem("user_id", null);
    this.setState({ logged_in: false });
  };

  changeQuery = (term, searchTerm) => {
    console.log("searchTerm: ", searchTerm);
    console.log(term);
    this.setState(
      prevState => ({
        searchFunction: term,
        query: searchTerm
      }),
      () => this.fetchRecipes()
    );
  };

  fetchRecipes = () => {
    console.log("fetchin those recipes");
    console.log(this.state.query);
    let searchTerm = this.state.query;
    fetch("https://dish-backend.herokuapp.com/getrecipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        searchTerm: searchTerm
      })
    })
      .then(response => response.json())
      .then(results =>
        this.setState({
          searchResults: results
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            render={props => (
              <NavBar2
                {...props}
                key="nav-bar"
                onLogOut={this.logOut}
                loggedIn={this.state.logged_in}
                onRecipeInput={this.changeQuery}
                searchResults={this.state.searchResults}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={() => this.state.logged_in === true ? <Dashboard logged_in={this.state.logged_in} /> : <LoginPage onLogIn={this.logIn} />}
          />
          {/* <Route
            path="/"
            exact
            render={props => <UnderConstruction />}
          /> */}
          <Route
            path="/signup"
            render={props => <SignupPage {...props} onSignup={this.signUp} />}
          />
          <Route
            path="/search"
            render={props => (
              <SearchPage
                logged_in={this.state.logged_in}
                currentUser={localStorage.getItem("user_id")}
                {...props}
                onRecipeInput={this.changeQuery}
                searchResults={this.state.searchResults}
              />
            )}
          />
          <Route
            path="/pantry"
            render={() => (
              <Pantry
                logged_in={this.state.logged_in}
                currentUser={localStorage.getItem("user_id")}
              />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart
                logged_in={this.state.logged_in}
                currentUser={localStorage.getItem("user_id")}
              />
            )}
          />
          <Route
            path="/recipes"
            render={() => <Cookbook logged_in={this.state.logged_in} />}
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
