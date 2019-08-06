import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import List from './List';
import renderer from 'react-test-renderer';

// Smoke test
it('renders List without crashing', () => {
    const list = document.createElement('section');
    ReactDOM.render(<App />, list);
    // ReactDOM.unmountComponentAtNode(List);
  });

// Snapshot
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<App name="List"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });