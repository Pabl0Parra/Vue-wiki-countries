<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import CountriesList from "./components/CountriesList.vue";
</script>

<template>
  <Navbar />
  <CountriesList />
  <div class="hello"></div>
  <RouterView />
</template>

<style scoped></style>
