import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import 'normalize.css'

import App from './components/main'
import reducers from './reducers/main'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)
/* eslint-disable no-underscore-dangle */
const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-enable */

export const store = createStoreWithMiddleware(
  reducers,
  reduxTools,
)

ReactDOM.render(
  // Provider connects react and redux
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
)
