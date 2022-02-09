<script setup>
import DescriptionPeople from "../components/people/DescriptionPeople.vue";
import CardPeople from "../components/people/CardPeople.vue";
import ListPeople from "../components/people/ListPeople.vue";
import People from "../service/module/people";
import { ref, onMounted } from "vue";

let tabPersos = ref(null);
onMounted(async () => {
  let dataTab = await People.listPeople(1);
  tabPersos.value = dataTab.data.results;
});
</script>
<template>
  <router-view :id="this.$route.params.id"></router-view>
  <!-- ICI mettre un truc pour dérouler-->
  <ListPeople :people="tabPersos"></ListPeople>
</template>
