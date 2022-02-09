import { createRouter, createWebHistory, stringifyQuery } from "vue-router";
import Home from "/src/views/Home.vue";
import People from "../views/People.vue";
import Specie from "../views/Specie.vue";
import Vehicle from "../views/Vehicle.vue";
import Film from "../views/Film.vue";
import Starship from "../views/Starship.vue";
import Planet from "../views/Planet.vue";
import Quizz from "../views/Quizz.vue";
import DescriptionPeople from "../components/people/DescriptionPeople.vue";
import DescriptionSpecie from "../components/specie/DescriptionSpecie.vue";
import DescriptionStarship from "../components/starship/DescriptionStarship.vue";
import DescriptionVehicle from "../components/vehicle/DescriptionVehicle.vue";
import DescriptionPlanet from "../components/planet/DescriptionPlanet.vue";
import DescriptionFilm from "../components/film/DescriptionFilm.vue";

import Search from "../views/Search.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/people",
    name: "People",
    component: People,
    children: [
      {
        path: ":id",
        component: DescriptionPeople,
        props: true,
      },
    ],
  },
  {
    path: "/species",
    name: "Species",
    component: Specie,
    children: [
      {
        path: ":id",
        component: DescriptionSpecie,
        props: true,
      },
    ],
  },
  {
    path: "/starships",
    name: "Starships",
    component: Starship,
    children: [
      {
        path: ":id",
        component: DescriptionStarship,
        props: true,
      },
    ],
  },
  {
    path: "/planets",
    name: "Planets",
    component: Planet,
    children: [
      {
        path: ":id",
        component: DescriptionPlanet,
        props: true,
      },
    ],
  },

  {
    path: "/films",
    name: "Films",
    component: Film,
    children: [
      {
        path: ":id",
        component: DescriptionFilm,
        props: true,
      },
    ],
  },
  {
    path: "/vehicles",
    name: "Vehicles",
    component: Vehicle,
    children: [
      {
        path: ":id",
        component: DescriptionVehicle,
        props: true,
      },
    ],
  },
  {
    path: "/quizz",
    name: "Quizz",
    component: Quizz,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
