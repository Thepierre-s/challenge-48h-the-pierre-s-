<script setup>
import CardPlanet from "./CardPlanet.vue";
import { ref, onMounted } from "vue";
import Planet from "../../service/module/planet";
let species = ref(null);
onMounted(async () => {
  let data = await Planet.listPlanet();
  species.value = data.data.results;
});
</script>

<template>
  <div class="container w-full p-3 mx-auto flex justify-center">
    <CardPlanet
      v-for="specie in species"
      :key="specie"
      :spec="specie"
    ></CardPlanet>
  </div>
</template>
