import { db, docs } from '@/utils/firebase'

/**
 * GET collection from firestore.
 */
export const getCollection = async (collectionName) => {
  const response = await db.collection(collectionName).get()
  return docs(response.docs)
}
