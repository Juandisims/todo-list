import { combineReducers } from 'redux';
import todosReducer from '../modules/Todos/duck';

const rootReduducer = combineReducers({ todos: todosReducer });

export default rootReduducer;
