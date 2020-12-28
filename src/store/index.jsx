import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from  'redux-logger';

import {fetchAllNeko} from './fetch-api/reducer'

const AllReducers  = combineReducers({
    fetchAllNeko
})

export const store = createStore(
    AllReducers,
    applyMiddleware(thunk, logger)
)