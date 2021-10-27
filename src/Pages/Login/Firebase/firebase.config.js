console.log(process.env);

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUT_FIREBASEH_DOMAIN,
    projectId: process.env.REACT_APP_PR_FIREBASEOJECT_ID,
    storageBucket: process.env.REACT_APP_STORAG_FIREBASEE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_S_FIREBASEENDER_ID,
    appId: process.env.REACT_AP_FIREBASEP_APP_ID,
};

export default firebaseConfig;