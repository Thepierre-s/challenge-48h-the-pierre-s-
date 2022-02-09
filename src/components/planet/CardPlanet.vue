<script setup>
import { ref, onMounted } from "vue";

defineProps({
  planet: Object,
});
</script>

<template>
  <div v-if="planet != null" class="group w-32 h-64 pt-2 m-2 overflow-hidden">
    <img :src="planet.url_img" class="object-cover w-full h-3/4 transition-all delay-150 hover:-translate-y-1 hover:scale-110" alt=""/>
    <p class="h-1/4 invisible group-hover:visible text-sm mb-5">{{ planet.name }}</p>
    <p class="h-1/4 invisible group-hover:visible text-sm mb-5">{{ planet.terrain }}</p>
    <p class="h-1/4 invisible group-hover:visible text-sm mb-5">{{ planet.population }}</p>
  </div>
</template>

<style scoped>
img {
  filter: grayscale(100%);
  width:100%;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}
img:hover {
  background-color: black;
  filter: grayscale(0);
  transform:scale(1.2);
}
div:hover {
  background-color: black;
  border : 2px solid yellow;
  transform:scale(1.2);
}
</style>
