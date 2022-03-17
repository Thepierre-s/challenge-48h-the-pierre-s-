<script setup>
import { ref, onMounted, computed } from "vue";

const prop = defineProps({
  planet: Object,
});
let planetID = ref();
planetID.value =
  prop.planet.url.split("/")[prop.planet.url.split("/").length - 2];
let urlPlanet = ref(null);
urlPlanet.value = "/planets/" + planetID.value;

let imgUrl = computed(
  () => "/src/assets/img/planets/" + planetID.value + ".png"
);
</script>

<template>
  <router-link :to="urlPlanet">
    <div v-if="planet != null" class="group w-32 h-64 pt-2 m-2 overflow-hidden">
      <img
        :src="imgUrl"
        class="object-cover w-full h-3/4 transition-all delay-150 hover:-translate-y-1 hover:scale-110"
        alt=""
      />
      <p class="h-1/4 invisible group-hover:visible text-sm mb-5">
        {{ planet.name }}
      </p>
      <p class="h-1/4 invisible group-hover:visible text-sm mb-5">
        {{ planet.terrain }}
      </p>
      <p class="h-1/4 invisible group-hover:visible text-sm mb-5">
        {{ planet.population }}
      </p>
    </div>
  </router-link>
</template>

<style scoped>
img {
  filter: grayscale(100%);
  width: 100%;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
}
img:hover {
  background-color: black;
  filter: grayscale(0);
  transform: scale(1.2);
}
div:hover {
  background-color: black;
  border: 2px solid yellow;
  transform: scale(1.2);
}
</style>
