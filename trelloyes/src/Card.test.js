import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';


// Smoke test
it('renders Card without crashing', () => {
  const card = document.createElement('div');
  ReactDOM.render(<App />, card);
//   ReactDOM.unmountComponentAtNode(card);
});

// Snapshot

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<div name="Card"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });