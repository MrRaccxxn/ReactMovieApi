
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducerCombinator from './redux/reducers/reducerCombinator';

const middleware = [thunk];
const initialState = {};

const store = createStore(
  reducerCombinator,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;