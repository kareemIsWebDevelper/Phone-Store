<template>
  <div class="wrapper">
    <div class="card-container">
      <div v-for="product in productStore.AppleProducts">
        <AppleCard :product="product" />
      </div>
    </div>
    <div class="card-container">
      <div v-for="product in productStore.SamProducts">
        <SamCard :product="product" />
      </div>
    </div>
    <div class="card-container">
      <div v-for="product in Store.realmeProducts">
        <RealmeCard :product="product" />
      </div>
    </div>
    <div class="card-container">
      <div v-for="product in xiaomiStore.xiaomiProducts">
        <RedmiCard :product="product" />
      </div>
    </div>
    <div class="footer">
      <Tail />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../stores/myStore'
import AppleCard from '../components/AppleCard.vue'
import SamCard from '../components/SamCard.vue'
import Tail from '../components/Tail.vue'
import { useRealmeStore } from '../stores/realme'
import RealmeCard from '../components/RealmeCard.vue'
import { usexiaomiProducts } from '../stores/redmi'
import RedmiCard from '../components/RedmiCard.vue'

const xiaomiStore = usexiaomiProducts()
const Store = useRealmeStore()
const productStore = useProductStore()
</script>

<style scoped>
.wrapper {
  max-width: 100%;
}
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
