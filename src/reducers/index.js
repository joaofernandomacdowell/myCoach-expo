import { combineReducers } from 'redux';
import QuestionnarieReducer from './QuestionnarieReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  questionnarie: QuestionnarieReducer,
  optionSelected: SelectionReducer,
  userData: ProfileReducer,
  auth: AuthReducer
});
