/*
 * @Author: your name
 * @Date: 2021-01-31 15:48:44
 * @LastEditTime: 2021-10-29 17:21:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/App.tsx
 */
import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import IsShow from './pages/isShow';
import Resize from './pages/resize';
import Three from './pages/three';
import CollapseComp from './pages/collapse';
import Tests from './pages/tests';
import UseEffect from './pages/useEffect';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/is-show" exact component={IsShow} />
        <Route path="/resize" exact component={Resize} />
        <Route path="/three" exact component={Three} />
        <Route path="/collapse" exact component={CollapseComp} />
        <Route path="/tests" exact component={Tests} />
        <Route path="/use-effect" exact component={UseEffect} />
      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
