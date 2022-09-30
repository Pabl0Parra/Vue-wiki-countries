<template>
  <!-- Dynamically get countries and border countries as well -->
  <div v-if="countryInfo">
    <img
      v-bind:src="`https://flagcdn.com/w320/${countryInfo.alpha2Code.toLowerCase()}.png`"
      alt=""
      class="mb-5"
    />
    <h1>{{ countryInfo.name.common }}</h1>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Capital</p>
        <p v-if="countryInfo.capital === 0">
          This countrrrry does not have a capital
        </p>
        <p class="me-5">{{ countryInfo.capital[0] }}</p>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Area</p>
        <p class="me-5">{{ countryInfo.area }} km2</p>
      </li>
      <li class="list-group-item">
        <p class="fw-bold">Borders:</p>
        <p v-if="countryInfo.borders.length === 0">
          This country has no borders <br />
          Who needs a border when you got the Wu Tang Clan. <br />
          <strong>Wu Tang, unifying societies since 1992!</strong>
        </p>
        <p v-else v-for="(border, index) in countryInfo.borders" :key="index">
          <router-link :to="`/list/${border}`">{{ border }}</router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
// OPTIONS API Version
// export default {
//   data() {
//     return {
//       name: "",
//       capital: "",
//       alphacode: "",
//       area: "",
//       borders: [],
//       alpha2Code: "",
//     };
//   },
//   methods: {
//     async getCountryByAlphaCode() {
//       // console.log(country.value.$route);
//       // console.log(country.value.$route.params);
//       // console.log(country.value.$route.params.alpha3Code);
//       alphacode = route.params.alpha3Code;
//       const response = await fetch(
//         `https://ih-countries-api.herokuapp.com/countries/${alphacode}`
//       );
//       const finalResponse = await response.json();
//       console.log(finalResponse);
//       country.value.name = finalResponse.name.common;
//       country.value.capital = finalResponse.capital[0];
//       country.value.area = finalResponse.area;
//       country.value.borders = finalResponse.borders;
//       country.value.alpha2Code = finalResponse.alpha2Code;
//     },
//   },
//   mounted() {
//     country.value.getCountryByAlphaCode();
//   },
//   computed: {
//     countryCode() {
//       return country.value.$route.params.alpha3Code;
//     },
//   },
//   watch: {
//     countryCode(newCountryCode) {
//       country.value.getCountryByAlphaCode();
//     },
//   },
// };
// COMPOSITION API Version
// import { useRoute } from "vue-router";
// import { ref, watch } from "vue";

// const route = useRoute();

// const country = ref({});

// const fetchCountry = async () => {
//   const response = await fetch(
//     `https://ih-countries-api.herokuapp.com/countries/${route.params.alpha3Code}`
//   );

//   const finalResponse = await response.json();
//   console.log(finalResponse);
//   country.value.name = finalResponse.name.common;
//   country.value.capital = finalResponse.capital[0];
//   country.value.area = finalResponse.area;
//   country.value.borders = finalResponse.borders;
//   country.value.alpha2Code = finalResponse.alpha2Code;
// };
// fetchCountry();

// watch(route, (newValue, oldValue) => {
//   fetchCountry();
// });

// Dynamically get countries and border countries as well
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
const countryInfo = ref(null);

const name = ref("");
const capital = ref("");
const area = ref("");
const borders = ref("");

// routing ref - data ref that will be used to store info from the API
const alpha3Code = ref("");
// image ref - data ref tht will be used to sotre info from the API
const alpha2Code = ref("");

//constant to use the route from the vue-router inside pf this specific SFC - Single File Component
const route = useRoute();

//function that will handle the fetching of info from API in order to provide visibility of each country
const getCountryByAlphaCode = async () => {
  //variable to get the current route from the app
  const alpha3Code = route.params.alpha3Code;

  // variable to call async the API endpoint to the specific country via its alpha3Code
  const response = await fetch(
    `https://ih-countries-api.herokuapp.com/countries/${route.params.alpha3Code}`
  );

  //variable to store info from API and cleanup its JSON format with JSon method
  const finalResponse = await response.json();

  // assign  values from the API to correspondent variables that we declared a bit above
  const name = finalResponse.name.common;
  const capital = finalResponse.capital[0];
  const area = finalResponse.area;
  const borders = finalResponse.border;
  const alpha2Code = finalResponse.alpha2Code;

  countryInfo.value = finalResponse;

  return { countryInfo };
};

//onMounted Hook - so that getCountryByAlphaCode gets call when a country is clicked (basically, so that we already have the info from the API before the component is mounted)
onMounted(() => {
  getCountryByAlphaCode();
});

// to have visibility to the access route that the program gives us to execute alphaCode3 in first instance
const countryCode = computed(() => {
  return route.params.alpha3Code;
});

watch(countryCode, (newValue) => {
  getCountryByAlphaCode();
});
</script>
()
<style></style>
