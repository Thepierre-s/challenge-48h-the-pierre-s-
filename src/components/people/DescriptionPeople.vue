<script setup>
import { ref, computed, onMounted, watch } from "vue";
import People from "../../service/module/people";

const props = defineProps({
  id: String,
});

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
    class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-between"
  >
    <div class="flex flex-col mt-8 justify-end">
      <h2 class="text-[30px] items-center">{{ onePerson.name }}</h2>
      <ul class="m-2 text-[15px]">
        <li class="m-2">Height : {{ onePerson.height }}</li>
        <li class="m-2">Mass : {{ onePerson.mass }}</li>
        <li class="m-2" v-if="onePerson.hair_color != 'n/a'">
          Hair Color : {{ onePerson.hair_color }}
        </li>
        <li class="m-2">Skin Color : {{ onePerson.skin_color }}</li>
        <li class="m-2">Eye Color : {{ onePerson.eye_color }}</li>
        <li class="m-2">BirthYear : {{ onePerson.birth_year }}</li>
        <li class="m-2" v-if="onePerson.gender != 'n/a'">
          Gender : {{ onePerson.gender }}
        </li>
        <li class="m-2">Home World : {{ onePerson.homeworld.name }}</li>
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
  content: "character";
  position: absolute;
  left: 25%;
  font-size: 6rem;
  z-index: -3;
  margin-bottom: 400px;
}
</style>
