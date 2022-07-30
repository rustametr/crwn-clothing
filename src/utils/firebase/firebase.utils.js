import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCkBtgQFvdTYDLzt4VPB_MEVOpkWFTk_Po",
    authDomain: "crwn-clothing-db-5dcc4.firebaseapp.com",
    projectId: "crwn-clothing-db-5dcc4",
    storageBucket: "crwn-clothing-db-5dcc4.appspot.com",
    messagingSenderId: "964082003077",
    appId: "1:964082003077:web:8ad3b211524170e6e40dec"
};

const firbase_app = initializeApp(firebaseConfig);

const google_provider = new GoogleAuthProvider();

google_provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const sign_in_with_google_popup = () => signInWithPopup(auth, google_provider);

export const db = getFirestore();

export const create_user_document_from_auth = async (user_auth, additionalInformation = {}) => {
    if(!user_auth) return;

    const user_doc_ref = doc(db, 'users', user_auth.uid);

    const user_snapshot = await getDoc(user_doc_ref);

    if(!user_snapshot.exists()){
        const { displayName, email } = user_auth;
        const createdAt = new Date();

        try{
            await setDoc(user_doc_ref, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }catch(error){
            console.log('error creating the user', error.message)
        }
    }
    return user_doc_ref;
}

export const createAuthUserWithEnailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
}