import React from 'react';
import ReactDOM from 'react-dom';
import {List} from './List';

test('render List correct input', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={'1'} id={'1'}  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
test('render List wrong input', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={'a'} id={'a'}  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
test('render List undefined input', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={'undefined'} id={'undefined'}  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });