import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Sidebar from '../Shared/Sidebar/Sidebar.js';
import MenuMobile from '../Shared/MenuMobile/MenuMobile.js';
import { Col, Row, Grid } from 'react-flexbox-grid';

// Pages
import Login from '../Login/Login';
import Home from "../../pages/Home";
import Chart from '../Shared/Chart';
import Group from '../../pages/Group';
import StudentList from '../../pages/StudentList';


import EditPage from '../../pages/edit/EditPage'

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
              : <Sidebar />
            }
          </Col>
          <Col xs={12} md={10}>
            <main>
              <Grid>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} history={history} />
                  <Route path="/chart" component={Chart} />
                  <Route path="/group" component={Group} />
                  <Route path="/edit" component={EditPage} />
                  <Route path="/student-list" component={StudentList} />
                </Switch>
              </Grid>
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
