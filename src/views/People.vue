<script setup>
import DescriptionPeople from "../components/people/DescriptionPeople.vue";
import CardPeople from "../components/people/CardPeople.vue";
import ListPeople from "../components/people/ListPeople.vue";
import People from "../service/module/people";
import { ref, onMounted } from "vue";
</script>
<template>
  <router-view :id="this.$route.params.id"></router-view>
  <!-- ICI mettre un truc pour dérouler-->
  <ListPeople></ListPeople>
</template>
