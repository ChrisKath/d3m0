import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
firebase.initializeApp({
  appId         : process.env.VUE_APP_FIRE_APP_ID,
  apiKey        : process.env.VUE_APP_FIRE_API_KEY,
  authDomain    : process.env.VUE_APP_FIRE_AUTH_DOMAIN,
  databaseURL   : process.env.VUE_APP_FIRE_DB_URL,
  projectId     : process.env.VUE_APP_FIRE_PROJECT_ID,
  storageBucket : process.env.VUE_APP_FIRE_STORAGE
})


export const db: any = firebase.firestore()
// export const storage: any = firebase.storage()

/**
 * map query snapshot.
 * 
 * @param {array} docs
 */
export function docs (docs: any): any[] {
  return docs.map((doc: any): any => ({
    id: doc.id,
    ...doc.data()
  }))
}
