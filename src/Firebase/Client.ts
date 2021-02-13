import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAh_X7S2EC0QwiOqNU0Mv6nmjZ-YJAhEjc',
  authDomain: 'extingusher-react.firebaseapp.com',
  projectId: 'extingusher-react',
  storageBucket: 'extingusher-react.appspot.com',
  messagingSenderId: '829756797887',
  appId: '1:829756797887:web:79cd6259807c648afba70a',
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
