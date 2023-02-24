import {initializeApp} from "firebase/app"
import {getFirestore} from '@firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDhbzdRKCX7_aZ6ve2Ic52ot1Uz74T2vXI",
  authDomain: "job-list-89159.firebaseapp.com",
  projectId: "job-list-89159",
  storageBucket: "job-list-89159.appspot.com",
  messagingSenderId: "314660883085",
  appId: "1:314660883085:web:e3ecef275c8e45bbf270c4"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;

