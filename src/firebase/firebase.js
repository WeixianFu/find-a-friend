import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBUKxc4LcazJILu59aJpq5BgkBtXop0RrE",
    authDomain: "find-a-friend-a42d8.firebaseapp.com",
    databaseURL: "https://find-a-friend-a42d8-default-rtdb.firebaseio.com",
    projectId: "find-a-friend-a42d8",
    storageBucket: "find-a-friend-a42d8.appspot.com",
    messagingSenderId: "519172978249",
    appId: "1:519172978249:web:8b69cd248a472befccf198"
};

app.initilizeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.database = app.database();
        this.storage = app.storage();
        this.auth = app.auth();
    }

    debugError(error) {
        alert(`${error.code} error has occured - ${error.message}`)
    }
}

export default Firebase;