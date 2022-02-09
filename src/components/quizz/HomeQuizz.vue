<script setup>
import { ref, inject, onMounted } from "vue";
import People from "../../service/module/people";
import Film from "../../service/module/film";
import planet from "../../service/module/planet";
import Specie from "../../service/module/specie";
import Vehicle from "../../service/module/vehicle";
import Starship from "../../service/module/starship";

const tabCategories = ref();
tabCategories.value = [
  "people",
  "films",
  "planets",
  "species",
  "starships",
  "vehicules",
];

let category = ref();
category.value = "people";
function ChooseCat(cat) {
  category.value = cat;
}
const { state, setStateProp } = inject("state");

async function getRandomElement(funclist, count) {
  let pageMax = Math.floor(count / 10);
  let randomPage = Math.floor(Math.random() * pageMax) + 1;
  let randomIndex = 0;
  if (randomPage == pageMax + 1) {
    randomIndex = Math.floor((Math.random() * count) % 10) + 1;
  } else {
    randomIndex = Math.floor(Math.random() * 9) + 1;
  }
  let page = 0;
  if (funclist != Film.listFilm) {
    page = await funclist(randomPage);
  } else {
    page = await funclist();
  }
  let object = page.data["results"][randomIndex];
  let randomPickup = ref();
  let id = 0;
  if (object["url"][object["url"].length - 3] == "/") {
    id = parseInt(object["url"][object["url"].length - 2]);
  } else {
    id = parseInt(
      object["url"].substr(object["url"].length - 3, object["url"].length - 2)
    );
  }
  if (funclist != Film.listFilm) {
    randomPickup.value = { id: id, name: object["name"] };
  } else {
    randomPickup.value = { id: id, name: object["title"] };
  }
  for (let i = 0; i < state.data["elements"].length; i++) {
    if (state.data["elements"][i]["id"] == randomPickup.value["id"]) {
      randomPickup.value = await getRandomElement(funclist, count);
    }
  }

  return randomPickup.value;
}

async function generatElement(func) {
  let list = await func();
  let count = list.data["count"];
  for (let i = 0; i < state.nbQuestions; i++) {
    let randomPick = ref();
    randomPick.value = await getRandomElement(func, count);
    state.data["elements"].push(randomPick.value);
  }
}

async function StartGame() {
  state.data.category = category.value;

  if (category.value === "people") {
    await generatElement(People.listPeople);
  } else if (category.value === "films") {
    await generatElement(Film.listFilm);
  } else if (category.value === "planets") {
    await generatElement(planet.listPlanet);
  } else if (category.value === "species") {
    await generatElement(Specie.listSpecie);
  } else if (category.value === "vehicules") {
    await generatElement(Vehicle.listVehicle);
  } else if (category.value === "starships") {
    await generatElement(Starship.listStarship);
  }

}
</script>

<template>
  <h1>muizz : What is this ?</h1>
  <p>Select a category</p>
  <div class="flex justify-center">
    <div class="m-2" v-for="category in tabCategories" :key="category">
      <button @click="ChooseCat(category)">{{ category }}</button>
    </div>
  </div>
  <button @click="StartGame">Jouer</button>
</template>
