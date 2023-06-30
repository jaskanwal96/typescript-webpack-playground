import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyArRMRSWQewtMpeyDyZer4l4pOdKvsDGXQ",
  authDomain: "redis-test-2b2d9.firebaseapp.com",
  projectId: "redis-test-2b2d9",
  storageBucket: "redis-test-2b2d9.appspot.com",
  messagingSenderId: "504093480481",
  appId: "1:504093480481:web:f42dabe1db3cc085613560",
  measurementId: "G-CF7XQWVT4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
