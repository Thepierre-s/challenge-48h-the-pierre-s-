<script setup>
import { ref, computed, onMounted, watch } from "vue";
import People from "../../service/module/people";

const props = defineProps({
  id: String,
});

const nameHomeWorld = ref("Aller chercher nom dans l'apI");
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
  () => "../src/assets/img/characters/" + props.id + ".jpg"
);
</script>

<template>
  <div v-if="loading == true">loading</div>
  <div v-else-if="onePerson != null" class="w-64 border-2 flex">
    <h2>{{ onePerson.name }}</h2>
    <ul>
      <li>Height : {{ onePerson.height }}</li>
      <li>Mass : {{ onePerson.mass }}</li>
      <li v-if="onePerson.hair_color != 'n/a'">
        Hair Color : {{ onePerson.hair_color }}
      </li>
      <li>Skin Color : {{ onePerson.skin_color }}</li>
      <li>Eye Color : {{ onePerson.eye_color }}</li>
      <li>BirthYear : {{ onePerson.birth_year }}</li>
      <li v-if="onePerson.gender != 'n/a'">Gender : {{ onePerson.gender }}</li>
      <li>HomeWorld : {{ nameHomeWorld }}</li>
    </ul>
    <img :src="urlImg" alt="" />
  </div>
</template>
