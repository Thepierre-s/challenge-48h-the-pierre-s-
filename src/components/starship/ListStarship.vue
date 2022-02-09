<script setup>
import CardStarship from "./CardStarship.vue";
import { ref, onMounted } from "vue";
import Starship from "../../service/module/starship";
let starships = ref(null);
onMounted(async () => {
  let data = await Starship.listStarship();
  starships.value = data.data.results;
});
</script>

<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-center">
    <CardStarship
      v-for="star in starships"
      :key="star"
      :starship="star"
    ></CardStarship>
  </div>
</template>
