import {
  SELECTED_OPTION
} from './types';

// props (this.props.selectOption)
export const updateQuestionAndOptions = () => {
  return {
    type: SELECTED_OPTION
  };
};
