import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp({
  appId         : process.env.REACT_APP_FIRE_APP_ID,
  apiKey        : process.env.REACT_APP_FIRE_API_KEY,
  authDomain    : process.env.REACT_APP_FIRE_AUTH_DOMAIN,
  databaseURL   : process.env.REACT_APP_FIRE_DB_URL,
  projectId     : process.env.REACT_APP_FIRE_PROJECT_ID,
  storageBucket : process.env.REACT_APP_FIRE_STORAGE
})

export const db = firebase.firestore()
// export const storage: any = firebase.storage()

/**
 * @param {array} docs
 */
export function docs (docs) {
  return docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}
