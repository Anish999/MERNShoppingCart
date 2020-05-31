import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

//import AboutPage from './about/index';
import LoginPage from '../components/views/LoginPage/LoginPage';
import RegisterPage from '../components/views/RegisterPage/RegisterPage';
import LandingPage from '../components/views/LandingPage/LandingPage';
import UploadProductPage from './views/UploadProductPage/UploadProductPage';
import Auth from '../hoc/auth';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
//import Home from './about/index';

function App() {
  return (
    <Suspense fallback={<div> Loading.... </div>}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh-80px)' }}>
        <Switch>
          <Route exact path='/' component={Auth(LandingPage, null)} />
          <Route
            exact
            path='/product/upload'
            component={Auth(UploadProductPage, true)}
          />
          <Route exact path='/login' component={(Auth(LoginPage), false)} />
          <Route
            exact
            path='/register'
            component={(Auth(RegisterPage), false)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
