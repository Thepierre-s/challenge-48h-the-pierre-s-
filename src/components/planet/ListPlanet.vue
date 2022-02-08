<script setup>
import CardPlanet from "./CardPlanet.vue";
import { ref, onMounted } from "vue";
import Planet from "../../service/module/planet";
let planets = ref(null);
onMounted(async () => {
  let data = await Planet.listPlanet();
  planets.value = data.data.results;
});
</script>

<template>
  <div class="container w-full p-3 mx-auto flex justify-center">
    <CardPlanet
      v-for="plan in planets"
      :key="plan"
      :planet="plan"
    ></CardPlanet>
  </div>
</template>
