console.log(process.env);
// const firebaseConfig = {
//     apiKey: "AIzaSyA3Phg9om9tfwGtayUutfVf9w3SdA8sfIY",
//     authDomain: "genius-car-mechanics-eac45.firebaseapp.com",
//     projectId: "genius-car-mechanics-eac45",
//     storageBucket: "genius-car-mechanics-eac45.appspot.com",
//     messagingSenderId: "282732773518",
//     appId: "1:282732773518:web:f8023f4bd6e2196d5149df"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUT_FIREBASEH_DOMAIN,
    projectId: process.env.REACT_APP_PR_FIREBASEOJECT_ID,
    storageBucket: process.env.REACT_APP_STORAG_FIREBASEE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_S_FIREBASEENDER_ID,
    appId: process.env.REACT_AP_FIREBASEP_APP_ID,
};

export default firebaseConfig;