import rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC45aZZSAVXyGYpBo9wt87vImpX1YihLhU",
    authDomain: "wes-bos-react-proj.firebaseapp.com",
    databaseURL: "https://wes-bos-react-proj-default-rtdb.firebaseio.com"
});
const base = rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
