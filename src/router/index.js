import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/Home.vue";
import People from "/src/views/People.vue";
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
