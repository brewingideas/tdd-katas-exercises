import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import logo from './logo.svg';

describe('React App', () => {
  it('renders without crashing', () => {
    const div = window.document.createElement('div');
    ReactDOM.render(<App logo={logo} />, div);
  });
});
