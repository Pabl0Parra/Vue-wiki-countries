<template></template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();

const country = ref(null);

const fechtCountry = async () => {
  const response = await fetch(
    `https://ih-countries-api.herokuapp.com/countries/${route.params.alpha3Code}`
  );
};
</script>

<style></style>
