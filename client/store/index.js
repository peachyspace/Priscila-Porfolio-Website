import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import contactEmail from './contactEmail'

const reducer = combineReducers({user, contactEmail})
let middleware = []
if (process.env.NODE_ENV === 'development') {
  middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
  )
} else {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
}

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './contactEmail'

/* 
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'

const reducer = combineReducers({user})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
*/
