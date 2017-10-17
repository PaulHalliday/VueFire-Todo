import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: 'AIzaSyBKqRd2bL9gpCqpcFX4S1hdfHnjWsa78Sk',
  authDomain: 'paulhalliday-983a2.firebaseapp.com',
  databaseURL: 'https://paulhalliday-983a2.firebaseio.com',
  projectId: 'paulhalliday-983a2',
  storageBucket: 'paulhalliday-983a2.appspot.com',
  messagingSenderId: '356203266095'
});

export const db = app.database();
export const namesRef = db.ref('names');
