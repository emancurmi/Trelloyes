import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';


test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot tests ', () => { const wrapper= renderer.create(<App />).toJSON(); expect(wrapper).toMatchSnapshot(); })