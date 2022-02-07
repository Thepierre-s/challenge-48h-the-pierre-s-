<script setup>
defineProps({
  person: Object,
});
</script>

<template>
  <div class="w-32 h-32">
    <p>Nom : {{ person.name }}</p>
    <img :src="person.img" />
  </div>
</template>
