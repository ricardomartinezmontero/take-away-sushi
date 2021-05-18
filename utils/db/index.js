import admin from "firebase-admin";

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
            databaseURL: process.env.DATABASE_URL,
        });
      } catch (error) {
        console.log('Firebase admin initialization error', error.stack);
      }
}

export default admin.database();