import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './Card';

test('render Card correct input', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card key={'a'} id={'a'}  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

test('render Card wrong input', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={'v'} id={'v'}  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
test('render Card undefined input', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={'undefined'} id={'undefined'}  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });