import React, { Component } from 'react';
import './App.css'
import FlashCardApp from './FlashCardApp'

class App extends Component {
  render() {
    return (
      <div className="App" id="body">
        <h1>React Flash Cards</h1>
        <FlashCardApp />
      </div>
    );
  }
}

export default App;
