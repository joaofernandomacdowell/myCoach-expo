import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const createUser = ({ email, password, name, profile }) => (
  (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => saveNameAndProfile(name, profile))
      .catch((error) => {
        console.log(error);
        createUserFail(dispatch, error.message);
      });
  }
);

// TODO: add catch statment in saveNameAndProfile Promise
const saveNameAndProfile = (name, profile) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/name`)
  .push(name);
  firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .push(profile);
};

// Helper (FAIL)
const createUserFail = (dispatch, errorMessage) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: errorMessage });
};
