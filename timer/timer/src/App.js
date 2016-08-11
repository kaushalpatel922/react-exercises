import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var App = React.createClass({
  getInitialState: function() {
    return {
      secondsEnded: 0
    }
  },
  startCounting: function() {
    this.setState({
      secondsEnded: this.state.secondsEnded + 1
    })
  },
  start: function() {
    this.interval = setInterval(this.startCounting, 1000);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  reset: function () {
    this.setState({
      secondsEnded: 0
    })
  },
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Timer</h2>
        </div>
        <p>You've been on this page since last {this.state.secondsEnded} seconds.</p>
        <button className='button' onClick={this.stop}>Stop</button><button className='button' onClick={this.start}>Start</button><button className='button' onClick={this.reset}>Reset</button>
      </div>
    );
  }
})

module.exports = App;
