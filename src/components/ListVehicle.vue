

<script setup>
import Vehicle from "/src/views/CardVehicle.vue";
import { ref } from "vue";
defineProps({
  Vehicle: Array,
});
</script>

<template>
  <div class="container w-full p-3 mx-auto flex justify-center">
    <CardVehicle
      v-for="vehicle in Vehicle"
      :key="vehicle"
      :vehicle="vehicle"
    ></CardVehicle>
  </div>
</template>