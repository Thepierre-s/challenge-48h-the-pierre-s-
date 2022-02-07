<script setup>
import DescriptionPeople from "../components/people/DescriptionPeople.vue";
import CardPeople from "../components/people/CardPeople.vue";
import ListPeople from "../components/people/ListPeople.vue";
import { ref } from "vue";

const tabPersos = ref([
  {
    name: "Luke Skywalker",
    img: "https://vignette.wikia.nocookie.net/fr.starwars/images/f/fa/Luke_TLJ.jpg/revision/latest?cb=20180110093251",
    id: 1,
  },
  {
    name: "C-3PO",
    img: "https://vignette.wikia.nocookie.net/fr.starwars/images/f/fa/Luke_TLJ.jpg/revision/latest?cb=20180110093251",
    id: 2,
  },
  {
    name: "Darth Vader",
    img: "https://vignette.wikia.nocookie.net/fr.starwars/images/f/fa/Luke_TLJ.jpg/revision/latest?cb=20180110093251",
    id: 3,
  },
  {
    name: "Leia Organa",
    img: "https://vignette.wikia.nocookie.net/fr.starwars/images/f/fa/Luke_TLJ.jpg/revision/latest?cb=20180110093251",
    id: 4,
  },
  {
    name: "Owen Lars",
    img: "https://vignette.wikia.nocookie.net/fr.starwars/images/f/fa/Luke_TLJ.jpg/revision/latest?cb=20180110093251",
    id: 1,
  },
]);

const onePerson = ref({
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  urlHomeWorld: "https://swapi.dev/api/people/1/",
});
</script>
<template>
  <!-- Passer l'ID du perso et non toutes les props ? -->
  <DescriptionPeople :person="onePerson"></DescriptionPeople>
  <!-- ICI mettre un truc pour dérouler-->
  <ListPeople :people="tabPersos"></ListPeople>
</template>
