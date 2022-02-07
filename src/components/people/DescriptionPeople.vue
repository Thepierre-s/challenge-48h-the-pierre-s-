<script setup>
import { ref } from "vue";
defineProps({
  person: Object,
});

const nameHomeWorld = ref("Allr chercher nom dans l'API");
</script>

<template>
  <h2>{{ person.name }}</h2>
  <ul>
    <li>Height : {{ person.height }}</li>
    <li>Mass : {{ person.mass }}</li>
    <li>Hair Color : {{ person.hair_color }}</li>
    <li>Skin Color : {{ person.skin_color }}</li>
    <li>Eye Color : {{ person.eye_color }}</li>
    <li>BirthYear : {{ person.birth_year }}</li>
    <li>Gender : {{ person.gender }}</li>
    <li>HomeWorld : {{ nameHomeWorld }}</li>
  </ul>
</template>
