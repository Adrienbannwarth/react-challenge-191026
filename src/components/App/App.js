import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Sidebar from '../Shared/Sidebar/Sidebar.js';

// Pages
import Login from '../Login/Login';
import Button from '../Shared/Button';
import Chart from '../Shared/Chart';


const history = createBrowserHistory()

const App = ({ isLoggedIn }) => {
  // if (!isLoggedIn) { history.push('/login') }
  return (
    <div className="App">
      <Router>
        <Sidebar></Sidebar>
        <main>
          <Switch>
            <Route exact path="/" component={Button} />
            <Route path="/login" component={Login} />
            <Route path="/chart" component={Chart} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  }
}

export default connect(mapStateToProps, null)(App);
