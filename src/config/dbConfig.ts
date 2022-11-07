import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADHawk25moqoiB_rcNquYfltjzLGz3Ns4",
  authDomain: "test-bidding-app.firebaseapp.com",
  projectId: "test-bidding-app",
  storageBucket: "test-bidding-app.appspot.com",
  messagingSenderId: "229717036764",
  appId: "1:229717036764:web:43ec298cc6bbf7661bae19"
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app);