import React from 'react'
import './App.css';
import Home from './pages/homepage';
import AppGraderHome from './pages/AppGrader';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import SignalGen from './pages/SignalGen';
import Optima from './pages/Optima';

function App() {
  
  return (
  <div className="App">
    <BrowserRouter>
      <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/appgrader' component={AppGraderHome} exact></Route> 
          <Route path='/signal' component={SignalGen} exact></Route> 
          <Route path='/optima' component={Optima} exact></Route> 
      </Switch>
    </BrowserRouter> 
  </div>
  ); 
}

export default App;
