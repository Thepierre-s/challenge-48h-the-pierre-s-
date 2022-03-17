<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const isMobile = ref(false);
</script>

<template>
  <div class="m-10">
    <!-- desktop nav -->
    <div class="hidden sm:block">
      <router-link to="/" class="wrap-image text-xl m-10">home</router-link>
      <router-link to="/people" class="wrap-image text-xl m-10"
        >people</router-link
      >

      <router-link to="/quizz" class="wrap-image text-xl m-10"
        >quizz</router-link
      >
      <router-link to="/films" class="wrap-image text-xl m-10"
        >films</router-link
      >
      <button
        class="wrap-image text-xl m-10 relative"
        @click="isOpen = !isOpen"
      >
        More
      </button>
      <div
        v-show="isOpen"
        class="flex flex-col w-72 bg-black bg-opacity-75 absolute top-26 right-12 z-10"
      >
        <router-link to="/vehicles" class="wrap-image text-xl m-10"
          >vehicles</router-link
        >
        <router-link to="/species" class="wrap-image text-xl m-10"
          >species</router-link
        >
        <router-link to="/planets" class="wrap-image text-xl m-10"
          >planets</router-link
        >
        <router-link to="/starships" class="wrap-image text-xl m-10"
          >starship</router-link
        >
        <router-link to="/search" class="wrap-image text-xl m-10"
          >search</router-link
        >
      </div>
    </div>
    <!-- desktop nav  end-->

    <!-- mobile nav -->
    <div class="sm:hidden flex justify-between">
      <nuxt-link to="/home" class="cursor-pointer">
        <img
          class="h-12 w-12"
          src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png"
        />
      </nuxt-link>
      <button class="relative" @click="isMobile = !isMobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 fill-yellow-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        v-show="isMobile"
        class="flex flex-col w-2/3 bg-black bg-opacity-75 absolute top-26 right-12 z-10"
      >
        <router-link to="/" class="wrap-image text-xl m-10">home</router-link>
        <router-link to="/people" class="wrap-image text-xl m-10"
          >people</router-link
        >

        <router-link to="/quizz" class="wrap-image text-xl m-10"
          >quizz</router-link
        >
        <router-link to="/films" class="wrap-image text-xl m-10"
          >films</router-link
        >
        <router-link to="/vehicles" class="wrap-image text-xl m-10"
          >vehicles</router-link
        >
        <router-link to="/species" class="wrap-image text-xl m-10"
          >species</router-link
        >
        <router-link to="/planets" class="wrap-image text-xl m-10"
          >planets</router-link
        >
        <router-link to="/starships" class="wrap-image text-xl m-10"
          >starship</router-link
        >
        <router-link to="/search" class="wrap-image text-xl m-10"
          >search</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}

.wrap-image {
  position: relative;
  padding: 1px 8px;
}
.wrap-image::before,
.wrap-image::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  border: 2px solid blue;
  transition: all 0.25s ease-out;
}
.wrap-image::before {
  background-color: #ff0000;
  top: -1px;
  left: -1px;
  opacity: 35%;
}
.wrap-image::after {
  bottom: -1px;
  right: -1px;
}
.wrap-image:hover::before {
  top: 5px;
  left: 5px;
}
.wrap-image:hover::after {
  bottom: 5px;
  right: 5px;
}
</style>
