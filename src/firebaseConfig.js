import {initializeApp}from 'firebase/app'
import {getFirestore} from '@firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig={
    apiKey: "AIzaSyDc4pQ7M49mqJ4m9fa_EdCH_uUDSl00jVI",
    authDomain: "airbnb-f88a9.firebaseapp.com",
    projectId: "airbnb-f88a9",
    storageBucket: "airbnb-f88a9.appspot.com",
    messagingSenderId: "334551186520",
    appId: "1:334551186520:web:1527e4756485e8561a5e2d"
}
const app =initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
