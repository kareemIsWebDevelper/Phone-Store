<template>
  <div class="wrapper text-dark">
    <h1 class="display-1 card-title" style="font-size: 50px; font-weight: bold">
      Choose Brand
    </h1>
    <div class="card mt-3 mb-5" style="width: 75%; margin: auto">
      <div>
        <select class="form-select" v-model="choosen">
          <option disabled value="">Select One</option>
          <option>iPhone</option>
          <option>Samsung</option>
          <option>Redmi</option>
          <option>Realme</option>
        </select>
      </div>
      <div>
        <div id="select-body">
          <h6 class="mt-3">Selected: {{ choosen }}</h6>
          <button @click="handleRoute" class="btn btn-dark rext-white btn-sm rounded">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Carousel -->
  <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>

    <!-- The slideshow/carousel -->
    <div class="carousel-inner">
      <h1 class="text-center mb-3 mt-2">Best Buy</h1>
      <div class="carousel-item active">
        <img src="../assets/last-apple.jpg" />
      </div>
      <div class="carousel-item">
        <img src="../assets/redmi-carousel.jpg" />
      </div>
      <div class="carousel-item">
        <img src="../assets/sam-carousel.jpg" />
      </div>
    </div>

    <!-- Left and right controls/icons -->
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
  <br /><br /><br />

  <div class="card-container" id="popular">
    <h1 class="text-center bg-black text-white p-2"
    style="width: 380px;"
    >Popular Brands</h1>
    <div class="col">
      <img src="../assets/apple.webp" />
    </div>
    <div class="col">
      <img src="https://tse1.mm.bing.net/th?id=OIP._ak_T-PjbHME7u70K1ScfQHaEK&pid=Api&P=0" />
    </div>
    <div class="col">
      <img src="https://tse2.mm.bing.net/th?id=OIP.RPXVJt4fjtYABBN4DitDtQHaEK&pid=Api&P=0" />
    </div>
    <div class="col">
      <img src="https://tse3.mm.bing.net/th?id=OIP.pcsvwQiRCOI09p39funKFQHaHa&pid=Api&P=0" />
    </div>
  </div>

  <div class="footer">
    <Tail />
  </div>
</template>

<script setup>
import Tail from '../components/Tail.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const choosen = ref('')
const handleRoute = () => {
  switch (choosen.value) {
    case 'iPhone':
      router.push('/iPhone')
      break
    case 'Redmi':
      router.push('/Redmi')
      break

    case 'Realme':
      router.push('/Realme')
      break

    case 'Samsung':
      router.push('/Samsung')
      break

    default:
    alert("You Forgot To Select Brand!");  
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 100%;
}
.footer {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
