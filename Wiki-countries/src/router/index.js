// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import CountryDetails from "../components/CountryDetails.vue";
import CountriesList from "../components/CountriesList.vue";

const routes = [
  {
    path: "/",
    name: "Countries List",
    component: CountriesList,
    children: [
      {
        path: "/list/:alpha3Code",
        name: "Country Details",
        component: CountryDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
