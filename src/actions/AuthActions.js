import { Alert } from 'react-native';
import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password, name, profile }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => saveNameAndProfile(name, profile))
      .catch((error) => {
        console.log(error);
        loginUserFail(dispatch, error.message)
      });
  };
};

// TODO: add catch statment in saveNameAndProfile Promise
const saveNameAndProfile = (name, profile) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/name`)
  .push(name);
  firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .push(profile);
};

// Helper (FAIL)
const loginUserFail = (dispatch, errorMessage) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: errorMessage });
};
