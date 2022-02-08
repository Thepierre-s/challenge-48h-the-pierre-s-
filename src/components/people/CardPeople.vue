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
    <div class="w-32 h-64 border-2 p-2">
      <p>{{ person.name }}</p>
      <img :src="urlImg" />
    </div>
  </router-link>
</template>
