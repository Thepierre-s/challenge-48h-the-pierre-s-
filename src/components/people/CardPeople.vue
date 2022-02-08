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
urlImg.value = "../src/assets/img/characters/" + personID.value + ".jpg";

let urlPeople = ref(null);
urlPeople.value = "/people/" + personID.value;
</script>

<template>
  <router-link :to="urlPeople">
    <div class="group w-64 h-64 pt-2 m-2 overflow-hidden">
      <p class="h-1/4 invisible group-hover:visible">{{ person.name }}</p>
      <img
        class="w-full h-3/4 transition-all delay-150 hover:-translate-y-1 hover:scale-110"
        :src="urlImg"
      />
    </div>
  </router-link>
</template>
