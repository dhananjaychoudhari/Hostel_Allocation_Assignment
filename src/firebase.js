
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-R_kif89sbHCs1a26l7qpOSG-JkqBbbo",
  authDomain: "hostel-booking-23f6a.firebaseapp.com",
  projectId: "hostel-booking-23f6a",
  storageBucket: "hostel-booking-23f6a.appspot.com",
  messagingSenderId: "1025676834112",
  appId: "1:1025676834112:web:6b5a3bbbf79b7fb0ea76a5",
  measurementId: "G-VEG6BDRB92"
};
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase;