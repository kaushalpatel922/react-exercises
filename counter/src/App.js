import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var App = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },
  add: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  substract: function () {
    this.setState({
      count: this.state.count - 1
    })
  },
  reset: function () {
    this.setState({
      count: 0
    })
  },
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Counter</p>
        <button className="button" onClick={this.add}>+ 1</button>
        <p>Total: {this.state.count}</p>
        <button className="button" onClick={this.substract}>- 1</button><br/><br />
        <button className="button" onClick={this.reset}>Reset</button>
      </div>
    );
  }
})

module.exports = App;
