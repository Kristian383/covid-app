<template>
  <div class="countries-container">
    <the-loader v-if="!allCountries.length"></the-loader>
    <template v-else>
      <div class="top-section">
        <p>
          A summary of new and total cases per country up to and including
          <u>{{ today }}</u> :
        </p>
        <input
          type="text"
          class="text-search"
          placeholder="Search country"
          v-model.trim="inputText"
        />
      </div>
      <div class="countries-list">
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Country</th>
              <th scope="col">Active cases</th>
              <th scope="col">Total confirmed</th>
              <th scope="col">New deaths</th>
              <th scope="col">Total deaths</th>
              <th scope="col">New recovered</th>
              <th scope="col">Total recovered</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(country, index) in allCountries" :key="country.country">
              <td data-label="Index">{{ index + 1 }}</td>
              <td data-label="Country">
                <router-link :to="'/country/' + country.slug"
                  >{{ country.country }}
                </router-link>
              </td>
              <td data-label="Active cases">
                {{ numberWithCommas(country.activeCases) }}
              </td>
              <td data-label="Total confirmed">
                {{ numberWithCommas(country.totalConfirmed) }}
              </td>
              <td data-label="New deaths">
                {{ numberWithCommas(country.newDeaths) }}
              </td>
              <td data-label="Total deaths">
                {{ numberWithCommas(country.totalDeaths) }}
              </td>
              <td data-label="New recovered">
                {{ numberWithCommas(country.newRecovered) }}
              </td>
              <td data-label="Total recovered">
                {{ numberWithCommas(country.totalRecovered) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import numberWithCommas from "../helpers/numberFormat";

export default {
  props: ["today"],
  setup() {
    // console.log(props.countries);
    const inputText = ref();

    const store = useStore();

    const allCountries = computed(() => {
      if (!inputText.value) return store.getters.getAllCountries;

      return store.getters.getAllCountries.filter((country) => {
        // console.log(country.country);
        // console.log(inputText);
        return country.country
          .toLowerCase()
          .includes(inputText.value.toLowerCase());
      });
    });

    return { inputText, allCountries, numberWithCommas };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 848px) {
  @include max_848px_table;
}

.countries-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem;

  .top-section {
    @extend .countries-container;
    align-items: center;

    @include lg {
      flex-direction: row;
    }

    .text-search {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 10px 16px 12px;
      line-height: 24px;
      outline: none;
      font-size: 16px;

      &:focus {
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-color: $light_blue;
      }
    }
  }

  @include table_normal;
}
</style>
