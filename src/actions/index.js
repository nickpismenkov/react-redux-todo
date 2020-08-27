import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../types';

const addTodo = (text) => ({
  type: ADD_TODO,
  id: Date.now().toString(),
  text,
});

const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

const VisibilityFilters = {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
};

export { addTodo, setVisibilityFilter, toggleTodo, VisibilityFilters };
