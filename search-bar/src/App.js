import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var StockRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.stock.title}</td>
        <td><a href="#">View</a></td>
      </tr>
    )
  }
})

var StockTable = React.createClass({
  render: function() {
    var rows = this.props.stocks.map(function(stock) {
      return <StockRow key={stock.title} stock={stock} />
    })
    return (
      <div className="row spacer">
        <div className="col-lg-4 col-lg-offset-4">
          <table width="100%">
            <thead>
              <tr>
                <th>Title</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})

var SearchBar = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-lg-4 col-lg-offset-4">
          <input type="search" className="form-control" placeholder="Search for episode" />
        </div>
      </div>
    );
  }
});

var App = React.createClass({
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Search-Bar</h2>
          </div>
          <p className="App-intro">
            App
          </p>
          <div className="container" >
            <div className="spacer">
              <div className="row">
                <div className="col-lg-4 col-lg-offset-4">
                  <input type="search" className="form-control" placeholder="Search for episode" />
                </div>
              </div>
            </div>
          </div>
          <StockTable stocks={stocks} />
        </div>
      );
    }
  })

var stocks = [{
    title: 'UA',
    link: 'http://finance.yahoo.com/quote/UA?p=UA'
  },{
    title: 'YHOO',
    link: 'http://finance.yahoo.com/quote/YHOO?p=YHOO'
  },{
    title: 'AA',
    link: 'http://finance.yahoo.com/quote/AA?p=AA'
  },{
    title: 'AAPL',
    link: 'http://finance.yahoo.com/quote/AAPL?p=AAPL'
  },{
    title: 'FB',
    link: 'http://finance.yahoo.com/quote/FB?p=FB'
  },{
    title: 'TSLA',
    link: 'http://finance.yahoo.com/quote/TSLA?p=TSLA'
  }
]

export default App;
