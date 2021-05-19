import admin from "firebase-admin";

if (process.env.GOOGLE_APPLICATION_CREDENTIALS && !admin.apps.length) {
    try {
        const FCM_TOKEN = JSON.parse(
            process.env.GOOGLE_APPLICATION_CREDENTIALS
        );

        const serviceAccount = {
            projectId: FCM_TOKEN.project_id,
            clientEmail: FCM_TOKEN.client_email,
            privateKey: FCM_TOKEN.private_key,
        };
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: process.env.DATABASE_URL,
        });
    } catch (error) {
        console.log("Firebase admin initialization error", error.stack);
    }
}

export default admin.apps.length ? admin.database() : undefined;
