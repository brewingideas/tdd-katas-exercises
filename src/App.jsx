import React from 'react';
import './App.css';

const App = ({ logo }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.jsx</code> and save to reload.
    </p>
  </div>
);
App.propTypes = {
  logo: React.PropTypes.string.isRequired,
};

export default App;
