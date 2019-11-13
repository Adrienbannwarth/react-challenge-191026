import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Sidebar from '../Shared/Sidebar/Sidebar.js';
import MenuMobile from '../Shared/MenuMobile/MenuMobile.js';
import { Col, Row } from 'react-flexbox-grid';

// Pages
import Login from '../Login/Login';
import Button from '../Shared/Button';
import Chart from '../Shared/Chart';
import Profile from '../Shared/Profile';
import Group from '../../pages/Group';


const history = createBrowserHistory()

const App = ({ isLoggedIn }) => {
  const [ width, setWidth ] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  const isMobile = width <= 768;
  // if (!isLoggedIn) { history.push('/login') }
  return (
    <div className="App">
      <Router>
        <Row>
          <Col xs={12} md={2}>
            {isMobile ?
              <MenuMobile/>
            :
              <Sidebar />
            }
          </Col>
          <Col xs={12} md={10}>
            <main>
              <Switch>
                <Route exact path="/" component={Button} />
                <Route path="/login" component={Login} />
                <Route path="/chart" component={Chart} />
                <Route path="/group" component={Group} />
              </Switch>
            </main>
          </Col>
        </Row>
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
