import React, { useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Counter from "./components/Counter";
import TeamList from "./components/TeamList";
import * as actionCreators from "../src/state/actionCreators";

export function App(props) {
  useEffect(() => {
    actionCreators.getCat();
  }, []);
  console.log("props from app", props);
  return (
    <div className="App">
      <div>
        <Counter />
      </div>
      <div>
        <TeamList />
      </div>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators.getCat
)(App);
