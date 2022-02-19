import firebase from 'firebase';
import 'firebase/firestore'; 
import 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyDM9ec4c_CU4t_yLIqQtX_vu0WRmwfLpVU",
  authDomain: "sample-test-a4c10.firebaseapp.com",
  databaseURL: "https://sample-test-a4c10-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sample-test-a4c10",
  storageBucket: "sample-test-a4c10.appspot.com",
  messagingSenderId: "289267915177",
  appId: "1:289267915177:web:16a4e56e7a3b324ed14cb8"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage, projectFirestore, timeStamp}