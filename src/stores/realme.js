import { onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import db from '../firebase/init'
import { getDocs, collection, query, getDoc } from 'firebase/firestore'

export const useRealmeStore = defineStore('realme', () => {
  const realmeProducts = reactive([])

  async function getRealme() {
    const q = query(collection(db, 'realme'))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
      let product = doc.data()
      product.id = doc.id
      realmeProducts.push(product)
    })
  }

  onMounted(() => {
    getRealme()
  })

  return { realmeProducts }
})
