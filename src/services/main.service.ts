import { db, docs } from '@/libs/firebase'

export const mainService = {
  /**
   * GET collection from firestore.
   *
   * @param {string} collectName
   */
  async getCollect(collectName: string): Promise<any> {
    const response = await db.collection(collectName).get()
    return docs(response.docs)
  }
}
