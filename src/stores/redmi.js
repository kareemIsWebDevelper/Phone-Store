import { onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import db from '../firebase/init'
import { getDocs, collection, query } from 'firebase/firestore'

export const usexiaomiProducts = defineStore('xiaomi', () => {
  const xiaomiProducts = reactive([])

  async function getxiaomi() {
    const q = query(collection(db, 'xiaomi'))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
      let product = doc.data()
      product.id = doc.id
      xiaomiProducts.push(product)
    })
  }

  onMounted(() => {
    getxiaomi()
  })

  return { xiaomiProducts }
})
