import React from "react";

import { connect } from "react-redux";

import { increment } from "../redux";
import { decrement } from "../redux";

function App(props) {
  return (
    <div className="app">
      <button onClick={props.decrement}>-</button>
      <h1>{props.counter}</h1>
      <button onClick={props.increment}>+</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter: state
  }
};

export default connect(mapStateToProps, { increment, decrement })(App);