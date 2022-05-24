/*
 * @Author: your name
 * @Date: 2021-01-31 15:48:44
 * @LastEditTime: 2022-04-12 15:29:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/App.tsx
 */
import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import KeepAlive from 'react-activation';
import './App.css';
import Index from './pages/index';
import IsShow from './pages/isShow';
import Resize from './pages/resize';
import Three from './pages/three';
import CollapseComp from './pages/collapse';
import Tests from './pages/tests';
import UseEffect from './pages/useEffect';
// import KeepAlive1 from './pages/keepAlive/keep-alive-1';
// import KeepAlive2 from './pages/keepAlive/keep-alive-2';
import Dnd from './pages/dnd';
import AntdMenu from './pages/antd-menu';
import './test';
// import Parent from './pages/parent-child/parent';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        {/* <Route path="/is-show" exact component={IsShow} /> */}
        <Route path="/resize" exact component={Resize} />
        <Route path="/three" exact component={Three} />
        <Route path="/collapse" exact component={CollapseComp} />
        <Route path="/tests" exact component={Tests} />
        <Route path="/use-effect" exact component={UseEffect} />
        {/* <Route path="/keep1" exact component={KeepAlive1} />
        <Route path="/keep2" exact component={() => (
          <KeepAlive>
            <KeepAlive2 />
          </KeepAlive>
        )} /> */}
        <Route path="/dnd" exact component={Dnd} />
        <Route path="/antd-menu" exact component={AntdMenu} />
        {/* <Route path="/parent" exact component={Parent} /> */}
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
