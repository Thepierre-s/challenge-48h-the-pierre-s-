import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import People from "/src/views/People.vue";
import Specie from "/src/views/Specie.vue";

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
    path: "/specie",
    name: "Specie",
    component: Specie,

  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
