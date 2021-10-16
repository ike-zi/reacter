import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

ReactDOM.render(<Home />, document.getElementById('app'));

let func = () => {
  alert(45);
};
func();

console.log('TESTING COMPLETE');
