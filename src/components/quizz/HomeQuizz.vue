<script setup>
import { ref, inject, onMounted, computed } from "vue";
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
  "vehicles",
];

let urlImg = [
  "../src/assets/img/characters/4.png",
  "../src/assets/img/films/1.png",
  "../src/assets/img/planets/2.png",
  "../src/assets/img/species/3.png",
  "../src/assets/img/starships/5.png",
  "../src/assets/img/vehicles/26.png",
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
  } else if (category.value === "vehicles") {
    await generatElement(Vehicle.listVehicle);
  } else if (category.value === "starships") {
    await generatElement(Starship.listStarship);
  }
}
</script>

<template>
  <h1>quizz : What is this ?</h1>
  <p class="title">Select a category</p>
  <div class="m-10 h-62 flex justify-center">
    <div
      class="truc text-xl m-10 group overflow-hidden"
      v-for="(category, index) in tabCategories"
      :key="category"
      @click="ChooseCat(category)"
    >
      <button class="h-1/5 wrap-image group-hover:visible category">
        {{ category }}
      </button>
      <img
        class="w-full h-4/5 m-5 group-hover:visible filter-none rounded-3xl"
        :src="urlImg[index]"
      />
    </div>
  </div>
  <p class="text-base mb-6">Catégorie choisie : {{ category }}</p>
  <button class="wrap-image text-4xl" @click="StartGame">Jouer</button>
</template>

<style scoped>
div.truc:hover {
  background-color: black;
  border: 2px solid yellow;
  border-radius: 100px;
  transform: scale(1.2);
}
button :active {
  background-color: yellow;
}
h1 {
  font-size: 100px;
  margin: 50px;
}
p.title {
  margin: 50px;
  font-size: 50px;
}
.wrap-image {
  position: relative;
  padding: 1px 8px;
}
.wrap-image::before,
.wrap-image::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  border: 2px solid blue;
  transition: all 0.25s ease-out;
}
.wrap-image::before {
  background-color: #ff0000;
  top: -1px;
  left: -1px;
  opacity: 35%;
}
.wrap-image::after {
  bottom: -1px;
  right: -1px;
}
.wrap-image:hover::before {
  top: 5px;
  left: 5px;
}
.wrap-image:hover::after {
  bottom: 5px;
  right: 5px;
}
</style>
