import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import visibilityReducer from './visibilityReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibility: visibilityReducer,
});

export default rootReducer;
