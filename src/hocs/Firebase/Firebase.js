import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: 'AIzaSyDBX-B7vQIB2orhJfi6YILozwkkOMFEEsY',
    authDomain: 'armada-campaign-app.firebaseapp.com',
    projectId: 'armada-campaign-app',
    databaseURL: 'https://armada-campaign-app.firebaseio.com',
    storageBucket: 'armada-campaign-app.appspot.com',
    messaageSenderId: '677369895739'
}

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    createUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    signInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut = () => {
        return this.auth.signOut();
    }

    requestPasswordResetEmail = (email) => {
       return  this.auth.sendPasswordResetEmail(email);
    }

    updatePassword = (password) => {
        return this.auth.currentUser.updatePassword(password);
    }

    user = (uid) => {
        return this.db.collection('users').doc(uid);
    }

    users = () => {
        return this.db.collection('users');
    }

    objective = (id) => {
        return this.db.collection('objectives').doc(id);
    }

    objectives = () => {
        return this.db.collection('objectives');
    }

    planet = (id) => {
        return this.db.collection('planets').doc(id);
    }

    planets = () => {
        return this.db.collection('planets');
    }

    campaign = (id) => {
        return this.db.collection('campaigns').doc(id);
    }

    campaigns = () => {
        return this.db.collection('campaigns');
    }

    gameType = (id) => {
        return this.db.collections('gameTypes').doc(id);
    }

    gameTypes = () => {
        return this.db.collections('gameTypes');
    }

}

export default Firebase;