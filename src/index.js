import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';

const a = [1, 3];

console.log(a);

ReactDOM.render(<App/>, document.getElementById('root'));

switch (a) {
  case 2:
  case 3:
    console.log(a);
    break;
  default:
    console.log(2);
}

if (a) {
  console.log(3);
}

function asdf(a) {
  if (a) {
    return 2;
  }
}

asdf();