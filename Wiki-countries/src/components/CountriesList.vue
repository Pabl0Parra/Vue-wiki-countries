<template>
  <Spinner />
  <h1>Country List</h1>
  <!-- wrapper div de bootstrap -->
  <div class="container">
    <!-- row wrapper div de bootstrap -->
    <div class="row">
      <div class="col-5">
        <div class="list-group">
          <router-link
            v-for="(country, index) in countries"
            :key="index"
            :to="`/list/${country.alpha3Code}`"
            class="list-group-item list-group-item-action d-flex flex-column justify-content-center"
          >
            <img
              class="flag"
              :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
              alt=""
            />
            <p>
              {{ country.name.common }}
            </p>
          </router-link>
        </div>
      </div>
      <div class="col-7">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Spinner from "./Spinner.vue";
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
</style>
