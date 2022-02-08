<script setup>
import { ref, computed, onMounted, watch } from "vue";
import People from "../../service/module/people";

const props = defineProps({
  id: String,
});

const nameHomeWorld = ref("Aller chercher nom dans l'api");
let loading = ref(true);
let onePerson = ref(null);

onMounted(async () => {
  let data = await People.getPeopleById(props.id);
  onePerson.value = data.data;
  loading.value = false;
});

watch(async (id) => {
  loading.value = true;
  let data = await People.getPeopleById(props.id);
  onePerson.value = data.data;
  loading.value = false;
});
const urlImg = computed(
  () => "../src/assets/img/characters/" + props.id + ".png"
);
</script>

<template>
  <div v-if="loading == true">loading</div>
  <div
    v-else-if="onePerson != null"
    id="character"
    class="container px-1 md:px-10 md:py-10 flex justify-between mx-auto"
  >
    <div class="flex flex-col items-center justify-center">
      <h2 class="mt-20 text-[20px]">{{ onePerson.name }}</h2>
      <ul class="mt-20 text-[15px]">
        <li>Height : {{ onePerson.height }}</li>
        <li>Mass : {{ onePerson.mass }}</li>
        <li v-if="onePerson.hair_color != 'n/a'">
          Hair Color : {{ onePerson.hair_color }}
        </li>
        <li>Skin Color : {{ onePerson.skin_color }}</li>
        <li>Eye Color : {{ onePerson.eye_color }}</li>
        <li>BirthYear : {{ onePerson.birth_year }}</li>
        <li v-if="onePerson.gender != 'n/a'">
          Gender : {{ onePerson.gender }}
        </li>
        <li>Home World : {{ nameHomeWorld }}</li>
      </ul>
    </div>
    <img class="max-h-[500px] max-w-[420px]" :src="urlImg" alt="" />
  </div>
</template>

<style scoped>
#character {
  position: relative;
}
#character::after {
  font-family: "Star Jhol";
  content: "The character";
  position: absolute;
  left: 25%;
  font-size: 6rem;
  z-index: -3;
}
</style>
