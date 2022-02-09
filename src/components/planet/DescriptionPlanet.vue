<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Planet from "../../service/module/planet";

const props = defineProps({
  id: String,
});

let loading = ref(true);
let onePlanet = ref(null);

onMounted(async () => {
  let data = await Planet.getPlanetById(props.id);
  onePlanet.value = data.data;
  loading.value = false;
});

watch(async (id) => {
  loading.value = true;
  let data = await Planet.getPlanetById(props.id);
  onePlanet.value = data.data;
  loading.value = false;
});
const urlImg = computed(() => "../src/assets/img/planets/" + props.id + ".png");
</script>

<template>
  <div v-if="loading == true">loading</div>
  <div
    v-else-if="onePlanet != null"
    id="planet"
    class="container px-1 md:px-10 md:py-10 flex flex-col-reverse sm:flex-row justify-between mx-auto"
  >
    <div class="sm:w-1/2 flex flex-col justify-end">
      <h2 class="text-[30px] items-center">{{ onePlanet.name }}</h2>
      <ul class="m-2 text-[15px]">
        <li class="m-2">rotation_period : {{ onePlanet.rotation_period }}</li>
        <li class="m-2">orbital_period : {{ onePlanet.orbital_period }}</li>
        <li class="m-2" v-if="onePlanet.diameter != 'n/a'">
          diameter : {{ onePlanet.diameter }}
        </li>
        <li class="m-2" v-if="onePlanet.climate != 'n/a'">
          climate : {{ onePlanet.climate }}
        </li>
        <li class="m-2" v-if="onePlanet.gravity != 'n/a'">
          gravity : {{ onePlanet.gravity }}
        </li>
        <li class="m-2" v-if="onePlanet.terrain != 'n/a'">
          terrain : {{ onePlanet.terrain }}
        </li>
        <li class="m-2" v-if="onePlanet.surface_water != 'n/a'">
          surface_water : {{ onePlanet.surface_water }}
        </li>
        <li class="m-2" v-if="onePlanet.population != 'n/a'">
          population : {{ onePlanet.population }}
        </li>
      </ul>
    </div>
    <img class="sm:w-1/2 max-h-[500px] max-w-[420px]" :src="urlImg" alt="" />
  </div>
</template>

<style scoped>
#planet {
  position: relative;
  --font-txt-bg: 5.75rem;
}
@media screen(sm) {
  #planet {
    --left-position: 55%;
    --font-txt-bg: 6rem;
  }
}
@media screen(md) {
  #planet {
    --left-position: 50%;
    --font-txt-bg: 7rem;
  }
  #planet::after {
    z-index: -3 !important;
  }
}
#planet::after {
  font-family: "Star Jhol";
  content: "planet";
  position: absolute;
  top: var(--top-position);
  left: var(--left-position);
  font-size: var(--font-txt-bg);
  z-index: 3;
}
</style>
