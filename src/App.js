import React, { Component } from 'react';
import './App.scss';
import List from './List.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Beyond Maslow</h1>
        </header>
        <List />
      </div>
    );
  }
}

export default App;
