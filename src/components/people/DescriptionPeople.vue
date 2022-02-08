<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  person: Object,
});
const nameHomeWorld = ref("Aller chercher nom dans l'APi");

const urlImg = computed(
  () =>
    "./src/assets/img/characters/" +
    props.person.url.split("/")[props.person.url.split("/").length - 2] +
    ".jpg"
);
</script>

<template>
  <div v-if="person != null" id="character" class="container px-1 md:px-10 md:py-10 flex justify-between mx-auto ">
    <div class="flex flex-col items-center justify-center">
      <h2 class ="mb-5 text-[20px]">{{ person.name }}</h2>
      <ul class ="text-[15px]">
        <li>Height : {{ person.height }}</li>
        <li>Mass : {{ person.mass }}</li>
        <li v-if="person.hair_color != 'n/a'">
          Hair Color : {{ person.hair_color }}
        </li>
        <li>Skin Color : {{ person.skin_color }}</li>
        <li>Eye Color : {{ person.eye_color }}</li>
        <li>BirthYear : {{ person.birth_year }}</li>
        <li v-if="person.gender != 'n/a'">Gender : {{ person.gender }}</li>
        <li>Home World : {{ nameHomeWorld }}</li>
      </ul>
    </div>
    <img class="max-h-[500px] max-w-[420px]" :src="urlImg" alt="" />
  </div>
</template>

<style scoped>

#character{
  position: relative;
}
#character::after{
 content:"The character";
 position: absolute;
 left:25%;
 font-size: 6rem;
 z-index:-3;
}
</style>