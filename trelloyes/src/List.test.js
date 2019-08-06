import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

// Smoke test
it('renders List without crashing', () => {
    const List = document.createElement('section');
    ReactDOM.render(<List />, List);
    ReactDOM.unmountComponentAtNode(List);
  });

// // Snapshot
// it('renders the UI as expected', () => {
//     const tree = renderer
//       .create(<List name="List"/>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();  
//     });