<template>
  <div class="wrapper">
    <div>
      <DetailsCard :product="state.product" />
    </div>
    <div class="footer">
      <Tail />
    </div>
  </div>
</template>

<script setup>
import db from '../firebase/init'
import { getDoc, doc } from 'firebase/firestore'
import { useRoute } from 'vue-router'
import DetailsCard from '../components/DetailsCard.vue'
import Tail from '../components/Tail.vue'
import { reactive, onMounted } from 'vue'

const state = reactive({
  product: null
})

const route = useRoute()
const id = route.params.id

// fetch apple by doc "id"
async function getById() {
  const docSnap = await getDoc(doc(db, 'samsung', id))

  if (docSnap.exists()) {
    state.product = docSnap.data()
    state.product.id = docSnap.id
  }
}
// fetch samsung by doc "id"
async function grapById() {
  const docSnap = await getDoc(doc(db, 'apple', id))

  if (docSnap.exists()) {
    state.product = docSnap.data()
    state.product.id = docSnap.id
  }
}

// fetch realme by doc "id"
async function realmeId() {
  const docSnap = await getDoc(doc(db, 'realme', id))

  if (docSnap.exists()) {
    state.product = docSnap.data()
    state.product.id = docSnap.id
  }
}
// fetch xiaomi by doc "id"
async function xiaomiId() {
  const docSnap = await getDoc(doc(db, 'xiaomi', id))

  if (docSnap.exists()) {
    state.product = docSnap.data()
    state.product.id = docSnap.id
  }
}

onMounted(() => {
  getById()
  grapById()
  realmeId()
  xiaomiId()
})
</script>

<style scoped>
.wrapper {
  max-width: 100%;
  min-height: 100vh;
}
.footer {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: 20px;
}
</style>
