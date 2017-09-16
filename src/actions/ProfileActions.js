import firebase from 'firebase';
import {
  PROFILE_UPDATE,
  PROFILE_CREATE,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED
} from './types';

// props (this.props.selectOption)
export const updateProfile = ({ type, selectedOption }) => {
  return {
    type: PROFILE_UPDATE,
    payload: { type, selectedOption }
  };
};

export const createProfile = (profile, name) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
      .push(profile);
    firebase.database().ref(`/users/${currentUser.uid}/name`)
      .push(name);
  };
};

export const firstNameChanged = (text) => {
  return {
    type: FIRST_NAME_CHANGED,
    payload: text
  };
}

export const lastNameChanged = (text) => {
  return {
    type: LAST_NAME_CHANGED,
    payload: text
  };
}
