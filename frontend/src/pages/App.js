import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Auth from "../hoc/auth";
// pages for this product
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import VideoList from './Video/VideoList.js';
import VideoDetail from './Video/VideoDetail.js';
import UserList from './Account/UserList.js';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Router>
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/v" component={VideoList} />
            <Route exact path="/v/:vId" component={VideoDetail} />
            <Route exact path="/users" component={UserList} />
            {/* <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} /> */}
          </Switch>
        </div>
      </Router>
      <Footer />
    </Suspense>
  );
}

export default App;
