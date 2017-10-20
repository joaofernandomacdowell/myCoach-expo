import {
  PROFILE_UPDATE,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  profile: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_UPDATE:
      const { type, selectedOption } = action.payload;
      return {
        ...state,
        profile: setProfile(state.profile, type, selectedOption)
      };
    case FIRST_NAME_CHANGED:
      return { ...state, firstName: action.payload };
    case LAST_NAME_CHANGED:
      return { ...state, lastName: action.payload };
    default:
      return state;
  }
};


const setProfile = (currProfile, newType, newOption) => {
  return { ...currProfile, [newType]: newOption };
}
