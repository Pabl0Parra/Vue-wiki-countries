<template>
  <h1 class="d-flex flex-row justify-content-center">Country List</h1>
  <!-- wrapper div de bootstrap -->
  <div class="container">
    <!-- row wrapper div de bootstrap -->
    <div class="row" v-if="countries">
      <div class="col-5">
        <div class="list-group">
          <router-link
            v-for="(country, index) in countries"
            :key="index"
            :to="`/list/${country.alpha3Code}`"
            class="list-group-item list-group-item-action d-flex flex-column justify-content-center align-items-center"
          >
            <img
              class="flag mb-2 mt-3"
              :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
              alt=""
            />
            <p class="fw-bold">
              {{ country.name.common }}
            </p>
            <!-- pointing to the alphacode -->
            <!-- <p class="fw-italic">
              {{ country.alpha2Code }}
            </p> -->
          </router-link>
        </div>
      </div>
      <div class="col-7">
        <CountryDetails />
      </div>
    </div>
    <div v-else class="row">
      <Spinner text="Loading Countries..." />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Spinner from "./Spinner.vue";
import CountryDetails from "./CountryDetails.vue";
const countries = ref(null);

const fetchCountries = async () => {
  const response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );

  const finalResponse = await response.json();

  const sortedCountries = finalResponse.sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });

  countries.value = sortedCountries;
};

fetchCountries();
</script>

<style>
.flag {
  width: 100px;
  height: 80px;
}
.list {
  margin-left: 16.5%;
}
</style>
