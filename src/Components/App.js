import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import { IntlProvider } from 'react-intl';

import { rootReducer } from '../Reducers/RootReducer';

import BasicLayout from './Layout/BasicLayout';
import VehicleList from './Vehicle/List';
import OrderList from './Order/List';

const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(promiseMiddleware)
));
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <IntlProvider local="en-US">
        <Provider store={store} >
          <Router history={history}>
            <Route path="/" component={BasicLayout}>
              <IndexRoute component={VehicleList} />
              <Route path="order" component={OrderList} />
            </Route>
          </Router>
        </Provider>
      </IntlProvider>
    );
  }
}

export default App;
