<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  person: Object,
});
const nameHomeWorld = ref("Allr chercher nom dans l'API");

const urlImg = computed(
  () =>
    "./src/assets/img/characters/" +
    props.person.url.split("/")[props.person.url.split("/").length - 2] +
    ".jpg"
);
</script>

<template>
  <div v-if="person != null" class="w-64 border-2 flex">
    <h2>{{ person.name }}</h2>
    <ul>
      <li>Height : {{ person.height }}</li>
      <li>Mass : {{ person.mass }}</li>
      <li v-if="person.hair_color != 'n/a'">
        Hair Color : {{ person.hair_color }}
      </li>
      <li>Skin Color : {{ person.skin_color }}</li>
      <li>Eye Color : {{ person.eye_color }}</li>
      <li>BirthYear : {{ person.birth_year }}</li>
      <li v-if="person.gender != 'n/a'">Gender : {{ person.gender }}</li>
      <li>HomeWorld : {{ nameHomeWorld }}</li>
    </ul>
    <img :src="urlImg" alt="" />
  </div>
</template>
