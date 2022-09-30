<template>
  <div class="p-4 ms-3 d-flex flex-column">
    <img
      class="flag pb-4"
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      alt=""
    />
    <h1>{{ country.name }}</h1>
    <table>
      <thead></thead>
      <tbody>
        <tr class="d-flex flex-column">
          <td class="fw-bold">Capital:</td>
          <td>{{ country.capital }}</td>
        </tr>
        <tr class="d-flex flex-column">
          <td class="fw-bold">Area:</td>
          <td>{{ country.area }} kms<sup>2</sup></td>
        </tr>
        <tr class="d-flex flex-column">
          <td class="fw-bold">Borders:</td>
          <td>
            <ul>
              <li v-for="(border, index) in country.borders" :key="index">
                {{ border }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
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
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();

const country = ref({});

const fetchCountry = async () => {
  const response = await fetch(
    `https://ih-countries-api.herokuapp.com/countries/${route.params.alpha3Code}`
  );

  const finalResponse = await response.json();
  console.log(finalResponse);
  country.value.name = finalResponse.name.common;
  country.value.capital = finalResponse.capital[0];
  country.value.area = finalResponse.area;
  country.value.borders = finalResponse.borders;
  country.value.alpha2Code = finalResponse.alpha2Code;
};
fetchCountry();

watch(route, (newValue, oldValue) => {
  fetchCountry();
});
</script>

<style></style>
