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
  },
  {
    path: "/starships",
    name: "Starships",
    component: Starship,
  },
  {
    path: "/planets",
    name: "Planets",
    component: Planet,
  },

  {
    path: "/films",
    name: "Films",
    component: Film,
  },
  {
    path: "/vehicle",
    name: "Vehicles",
    component: Vehicle,
  },
  {
    path: "/quizz",
    name: "Quizz",
    component: Quizz,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
