<script setup>
import { ref } from "vue";

defineProps({
spec:Object  

});


</script>

<template>
<div class=" w-72  h-[500px]  m-2 shadow-md rounded-sm">
        <img :src="spec.url_img" class="w-full h-2/3 border-2 border-b-yellow-400" alt="">
      <p class="text-3xl font-bold font-gray-200">{{ spec.name }}</p>
      <p class="text-2xl font-bold">{{ spec.classification }}</p>
      <p class="text-2xl font-bold">{{ spec.designation }}</p>
    <!--   <p class="text-2xl font-bold">{{ spec.homeworld }}</p>
   
      <p class="text-2xl font-bold">{{ spec.people }}</p>
      <p class="text-2xl font-bold">{{ spec.films }}</p> -->
</div>
  

</template>

<style scoped>
a {
  color: #42b983;
}
</style>