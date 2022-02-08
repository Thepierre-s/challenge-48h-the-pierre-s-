import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import People from "../views/People.vue";
import Specie from "../views/Specie.vue";

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
  },
  {
    path: "/species",
    name: "Species",
    component: Specie,

  },
  {
    path: "/starships",
    name: "Starships",
    component: Specie,

  }
  ,
  {
    path: "/planets",
    name: "Planets",
    component: Specie,
  },
  
  {
    path: "/films",
    name: "Films",
    component: Specie,
  }
   ,
  {
    path: "/vehicle",
    name: "Vehicles",
    component: Specie,

  }
  ,
  {
    path: "/quizz",
    name: "Quizz",
    component: Specie,

  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
