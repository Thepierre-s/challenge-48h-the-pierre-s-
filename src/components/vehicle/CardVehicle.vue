<script setup>
import { ref,onMounted } from "vue";

defineProps({
vehicle:Object

});


</script>

<template>
<div v-if="vehicle!=null" class=" w-72  h-[500px]  m-2 shadow-md rounded-sm">
        <img :src="vehicle.url_img" class="w-full h-2/3 border-2 border-b-yellow-400" alt="">

      <p  class="text-3xl font-bold font-gray-200">{{ vehicle.name }}</p>
      <p class="text-2xl font-bold">{{ vehicle.model }}</p>
      <p class="text-2xl font-bold">{{ vehicle.manufacturer }}</p>
 
</div>
  

</template>

<style scoped>
a {
  color: #42b983;
}
</style>