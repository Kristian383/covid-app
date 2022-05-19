<template>
  <div class="country-container">
    <the-loader v-if="isLoading"></the-loader>
    <template v-else>
      <h2 class="country-title">{{ countryName }}</h2>
      <p>
        Total COVID Cases up to and including
        <u>{{ getTotalCountryData.date }}</u> :
      </p>
      <h3 style="color: #424242">
        {{ numberWithCommas(getTotalCountryData.totalCases) }}
      </h3>
      <h4 style="color: #000">Deaths:</h4>
      <h3 style="color: #c22a2a">
        {{ numberWithCommas(getTotalCountryData.deaths) }}
      </h3>
      <h4 style="color: #000">Recovered:</h4>
      <h3 style="color: #69b34c">
        {{ numberWithCommas(getTotalCountryData.recovered) }}
      </h3>
      <div class="country-detail-container">
        <table>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Deaths</th>
              <th scope="col">Recovered</th>
              <th scope="col">Active cases</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dayData in countryData" :key="dayData.date">
              <td data-label="Date">{{ dayData.date }}</td>
              <td data-label="Confirmed">
                {{ numberWithCommas(dayData.confirmed) }}
              </td>
              <td data-label="Deaths">
                {{ numberWithCommas(dayData.deaths) }}
              </td>
              <td data-label="Recovered">
                {{ numberWithCommas(dayData.recovered) }}
              </td>
              <td data-label="Active cases">
                {{ numberWithCommas(dayData.active) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted, onUnmounted, ref } from "vue";
import numberWithCommas from "../helpers/numberFormat";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const isLoading = ref(false);

    const countrySlug = router.currentRoute.value.params.name;

    const countryName = computed(() => {
      return store.getters.getCountryName;
    });

    const countryData = computed(() => {
      return store.getters.getcountryData;
    });

    const getTotalCountryData = computed(() => {
      const data = store.getters.getTotalCountryData;
      if (data === undefined) return 0;
      return store.getters.getTotalCountryData;
    });

    onMounted(() => {
      isLoading.value = true;
      store.dispatch("loadCountryData", countrySlug).then((res) => {
        console.log(res);
        if (res == 404) {
          isLoading.value = false;
          router.push("/notFound");
        } else if (res === true) {
          isLoading.value = false;
        }
      });
    });

    onUnmounted(() => {
      store.commit("emptyCountryData");
    });
    return {
      countryName,
      numberWithCommas,
      getTotalCountryData,
      countryData,
      isLoading,
    };
  },
};
</script>

<style lang="scss" scoped>
.country-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  padding-top: 2rem;
  align-items: center;
  max-width: 980px;
  width: 100%;

  .country-title {
    margin-bottom: 1rem;
  }

  .country-detail-container {
    @include table_normal;

    margin-top: 1rem;

    @media screen and (max-width: 848px) {
      @include max_848px_table;
    }
  }
}
</style>
