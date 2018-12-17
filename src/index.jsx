import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './configureStore';
import {Route, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/:filter?' component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
