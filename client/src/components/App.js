import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './about/index';
import Login from './RegisterLogin/index';
import Register from './RegisterLogin/register';
//import Home from './about/index';

function App() {
  return (
    <div>
      <Switch>
        {/* <Route path='/' component={Home} /> */}
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
}

export default App;
