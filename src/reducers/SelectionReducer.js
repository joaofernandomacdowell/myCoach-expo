import {
  SELECTED_OPTION
} from '../actions/types';

const INITIAL_STATE = {
  currQuestionIndex: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_OPTION:
      return {
        ...state,
        currQuestionIndex: state.currQuestionIndex + 1
      };
    default:
      return state;
  }
};
