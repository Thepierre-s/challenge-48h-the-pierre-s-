<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Specie from "../../service/module/specie";

const props = defineProps({
  id: String,
});

let loading = ref(true);
let oneSpecie = ref(null);

onMounted(async () => {
  let data = await Specie.getSpecieById(props.id);
  oneSpecie.value = data.data;
  loading.value = false;
});

watch(async (id) => {
  loading.value = true;
  let data = await Specie.getSpecieById(props.id);
  oneSpecie.value = data.data;
  loading.value = false;
});
const urlImg = computed(
  () => "../src/assets/img/characters/" + props.id + ".png"
);
</script>

<template>
  <div v-if="loading == true">loading</div>
  <div
    v-else-if="oneSpecie != null"
    id="character"
    class="container px-1 md:px-10 md:py-10 flex justify-between mx-auto"
  >
    <div class="flex flex-col justify-end">
      <h2 class="text-[30px] items-center">{{ oneSpecie.name }}</h2>
      <ul class="m-2 text-[15px]">
        <li class="m-2">classification : {{ oneSpecie.classification }}</li>
        <li class="m-2">designation : {{ oneSpecie.designation }}</li>
        <li class="m-2" v-if="oneSpecie.average_height != 'n/a'">
          average height : {{ oneSpecie.average_height }}
        </li>
        <li class="m-2">Skin Colors : {{ oneSpecie.skin_colors }}</li>
        <li class="m-2">Hair Colors : {{ oneSpecie.hair_colors }}</li>

        <li class="m-2">Eye Colors : {{ oneSpecie.eye_colors }}</li>
        <li class="m-2">average lifespan : {{ oneSpecie.average_lifespan }}</li>
        <li class="m-2" v-if="oneSpecie.language != 'n/a'">
          language : {{ oneSpecie.language }}
        </li>
        <li class="m-2">Home World : {{ nameHomeWorld }}</li>
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
