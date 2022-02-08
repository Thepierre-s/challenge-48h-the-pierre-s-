<script setup>
import CardVehicle from "./CardVehicle.vue";
import { ref, onMounted } from "vue";
import Vehicle from "../../service/module/vehicle";
let vehicles = ref(null);
onMounted(async () => {
  let data = await Vehicle.listVehicle();
  vehicles.value = data.data.results;
});
</script>

<template>
  <div class="container w-full p-3 mx-auto flex justify-center">
    <CardVehicle
  
      v-for="vehi in vehicles"
      :key="vehi"
      :vehicle="vehi"
    ></CardVehicle
  >
  </div>
</template>