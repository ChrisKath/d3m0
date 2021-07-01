import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { useFormat } from '@/libs/moment'

// Initialize Firebase
initializeApp({
  appId: process.env.REACT_APP_FIRE_APP_ID,
  apiKey: process.env.REACT_APP_FIRE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGE
})

export const db = getFirestore()

/**
 * @param {array} docs
 */
export function docs(docs) {
  return docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
}

export function getDate({ createdAt }) {
  return useFormat(createdAt.toDate())
}

export function getTags({ tags }) {
  return tags.join(', ')
}
