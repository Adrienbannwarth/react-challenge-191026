import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Sidebar from '../Shared/Sidebar/Sidebar.js';
import MenuMobile from '../Shared/MenuMobile/MenuMobile.js';

// Pages
import Login from '../Login/Login';
import Button from '../Shared/Button';
import Chart from '../Shared/Chart';
import Profile from '../Shared/Profile';
import Group from '../../pages/Group';


const history = createBrowserHistory()

const App = ({ isLoggedIn }) => {
  // if (!isLoggedIn) { history.push('/login') }
  return (
    <div className="App">
      <Router>
        {window.innerWidth <= 576 &&
          <MenuMobile/>
        }
        
        {window.innerWidth > 576 &&
          <Sidebar></Sidebar>
        }
        <main>
          <Switch>
            <Route exact path="/" component={Button} />
            <Route path="/login" component={Login} />
            <Route path="/chart" component={Chart} />
            <Route path="/group" component={Group} />
            <Route path="/profile" component={Profile} />
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
