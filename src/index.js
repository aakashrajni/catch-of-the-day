import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './css/style.css';

import StorePicker from './components/StorePicker';
import App from './components/App';


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
