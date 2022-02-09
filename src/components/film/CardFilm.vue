<script setup>
import { ref, onMounted, computed } from "vue";

const prop = defineProps({
  film: Object,
});
let filmID = ref();
filmID.value = prop.film.url.split("/")[prop.film.url.split("/").length - 2];
let urlFilm = ref(null);
urlFilm.value = "/films/" + filmID.value;

let imgUrl = computed(() => "../src/assets/img/films/" + filmID.value + ".png");
</script>

<template>
  <router-link :to="urlFilm">
    <div v-if="film != null" class="group w-32 h-64 pt-2 m-2 overflow-hidden">
      <img
        :src="imgUrl"
        class="object-cover w-full h-3/4 transition-all delay-150 hover:-translate-y-1 hover:scale-110"
        alt=""
      />
      <p class="h-1/4 invisible group-hover:visible text-sm mb-5">
        {{ film.title }}
      </p>
      <p class="h-1/4 invisible group-hover:visible text-sm mb-5">
        {{ film.director }}
      </p>
      <p class="h-1/4 invisible group-hover:visible text-sm mb-5">
        {{ film.release_date }}
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
