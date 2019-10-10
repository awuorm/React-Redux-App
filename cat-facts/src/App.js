import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import Counter from './components/Counter';

export function App(props) {
  console.log("props from app", props)
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default connect(state => state)(App);
