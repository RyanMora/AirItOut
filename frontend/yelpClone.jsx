import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

//REMOVE AFTER TESTING
import { signup, login, logout } from './actions/session_actions';
import { fetchPlaces, fetchPlace } from './actions/place_actions';
import { fetchReviews } from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});
