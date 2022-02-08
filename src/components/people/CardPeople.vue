<script setup>
import { ref } from "vue";
const props = defineProps({
  person: Object,
  pageNumber: Number,
});
let urlImg = ref(null);
urlImg.value =
  "./src/assets/img/characters/" +
  props.person.url.split("/")[props.person.url.split("/").length - 2] +
  ".jpg";
</script>

<template>
  <div class="w-32 h-64 border-2 p-2">
    <p>{{ person.name }}</p>
    <img :src="urlImg" />
  </div>
</template>
