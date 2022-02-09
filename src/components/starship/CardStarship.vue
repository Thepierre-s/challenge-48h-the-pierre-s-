<script setup>
import { ref, onMounted, computed } from "vue";

let prop = defineProps({
  starship: Object,
});
let starshipID = ref();
starshipID.value =
  prop.starship.url.split("/")[prop.starship.url.split("/").length - 2];
let urlStarship = ref(null);
urlStarship.value = "/starships/" + starshipID.value;

let imgUrl = computed(
  () => "../src/assets/img/starships/" + starshipID.value + ".png"
);
</script>

<template>
  <router-link :to="urlStarship">
    <div
      v-if="starship != null"
      class="group w-32 h-64 pt-2 m-2 overflow-hidden"
    >
      <img
        :src="imgUrl"
        class="object-cover w-full h-3/4 transition-all delay-150 hover:-translate-y-1 hover:scale-110"
        alt=""
      />
      <p class="h-1/4 invisible group-hover:visible text-sm">
        {{ starship.name }}
      </p>
      <p class="h-1/4 invisible group-hover:visible text-sm">
        {{ starship.model }}
      </p>
      <p class="h-1/4 invisible group-hover:visible text-sm">
        {{ starship.manufacturer }}
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
