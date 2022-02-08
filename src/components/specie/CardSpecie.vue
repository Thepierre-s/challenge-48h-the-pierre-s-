<script setup>
import { ref, onMounted, computed } from "vue";

const prop = defineProps({
  spec: Object,
});
let imgUrl = computed(
  () =>
    "./src/assets/img/species/" +
    prop.spec.url.split("/")[prop.spec.url.split("/").length - 2] +
    ".jpg"
);
</script>

<template>
  <div v-if="spec != null" class="w-72 h-72 m-2 shadow-md rounded-sm">
    <img
      :src="imgUrl"
      class="w-full h-2/3 border-2 border-b-yellow-400"
      alt=""
    />
    <div class="w-full h-1/3">
      <p class="text-3xl font-bold font-gray-200">{{ spec.name }}</p>
   <!--    <p class="text-2xl font-bold">{{ spec.classification }}</p>
      <p class="text-2xl font-bold">{{ spec.designation }}</p> -->
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
