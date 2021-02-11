import * as React from 'react';
import { Route, Switch } from 'wouter';
import Login from 'pages/Login';
import Home from 'pages/Home';
import PageError from 'pages/PageError';
import Navbar from 'Component/Navbar';
import Copyright from 'Component/Copyright';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.conteiner}>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" />
        <Route component={Login} path="/login" />
        <Route component={PageError} path="/:rest*" />
      </Switch>
      <Copyright />
    </div>
  );
};

export default App;
