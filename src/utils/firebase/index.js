import firebase from "firebase/app";

if (!firebase.apps.length) {
    try {
        const firebaseConfig = {
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        };
        firebase.initializeApp(firebaseConfig);
    } catch (error) {
        console.log("Firebase admin initialization error", error.stack);
    }
}

export default firebase;