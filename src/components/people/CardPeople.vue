<script setup>
import { ref } from "vue";
const props = defineProps({
  person: Object,
  pageNumber: Number,
});

let personID = ref();
personID.value =
  props.person.url.split("/")[props.person.url.split("/").length - 2];
let urlImg = ref(null);
urlImg.value = "../src/assets/img/characters/" + personID.value + ".png";

let urlPeople = ref(null);
urlPeople.value = "/people/" + personID.value;
</script>

<template>
  <router-link :to="urlPeople">
    <div class="group w-32 h-64 pt-2 m-2 overflow-hidden">
      <p class="h-1/4 invisible group-hover:visible text-sm mb-5">{{ person.name }}</p>
      <img class="object-cover w-full h-3/4 transition-all delay-150 hover:-translate-y-1 hover:scale-110" :src="urlImg" />
    </div>
  </router-link>
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