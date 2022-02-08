<script setup>
import DescriptionPeople from "../components/people/DescriptionPeople.vue";
import CardPeople from "../components/people/CardPeople.vue";
import ListPeople from "../components/people/ListPeople.vue";
import People from "../service/module/people";
import { ref, onMounted } from "vue";

let onePerson = ref(null);
let tabPersos = ref(null);
onMounted(async () => {
  let data = await People.getPeopleById(30);
  onePerson.value = data.data;

  let dataTab = await People.listPeople(1);
  tabPersos.value = dataTab.data.results;
  console.log(dataTab.data.results);
});
</script>
<template>
  <!-- Passer l'ID du perso et non toutes les props ? -->
  <DescriptionPeople :person="onePerson"></DescriptionPeople>
  <!-- ICI mettre un truc pour dérouler-->
  <ListPeople :people="tabPersos"></ListPeople>
</template>
