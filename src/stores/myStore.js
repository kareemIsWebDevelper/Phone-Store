import { onMounted, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import db from '../firebase/init'
import { getDocs, collection, query } from 'firebase/firestore'
import { useLocalStorage } from '@vueuse/core'

export const useProductStore = defineStore('counter', () => {

  // add to card
  const count = ref(useLocalStorage("useVueCount", 0))
  function addToCard() {
    count.value++
  }

  const AppleProducts = reactive([])
  // fetch apple
  async function getApple() {
    const q = query(collection(db, 'apple'))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
      let product = doc.data()
      product.id = doc.id
      AppleProducts.push(product)
    })
  }

  const SamProducts = reactive([])
  // fetch samsung
  async function getSamsung() {
    const q = query(collection(db, 'samsung'))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
      let product = doc.data()
      product.id = doc.id
      SamProducts.push(product)
    })
  }

  onMounted(() => {
    getApple()
    getSamsung()
  })

  return { count, addToCard, AppleProducts, SamProducts }
})
