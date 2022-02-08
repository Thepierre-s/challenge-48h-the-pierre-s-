<script setup>
defineProps({
  person: Object,
});
</script>

<template>
  <div class="w-35 h-35 m-5 p-5">
    <p>Nom : {{ person.name }}</p>
    <img :src="person.img" />
  </div>
</template>
