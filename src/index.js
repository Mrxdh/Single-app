import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Shop from './Shop';
import registerServiceWorker from './registerServiceWorker';
// import { store, history } from './store'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import reducers from './reducers'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
    reducers,
    applyMiddleware(middleware)
)

const Root = (
    <Provider store={store} >
        <Router history={ history }>
            <div>
                <Route path='/' exact component={ App } />
                <Route path='/shop' exact component={ Shop } />
            </div>
        </Router>
    </Provider>
)

render(Root, document.getElementById('root'));
registerServiceWorker();
