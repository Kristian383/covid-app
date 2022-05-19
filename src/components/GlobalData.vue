<template>
  <div class="global-data-container">
    <div class="top-section">
      <h2>Current global data</h2>
      <p>
        Up to and including <b>{{ today }} </b>
      </p>
    </div>
    <div class="data-section">
      <!--v-for="data in dataTypes" :key="data.name" -->
      <div>
        <p class="data-name">Active Cases</p>
        <p>{{ numberWithCommas(globalData.activeCases) }}</p>
      </div>
      <div>
        <p class="data-name">New Deaths</p>
        <p>{{ numberWithCommas(globalData.newDeaths) }}</p>
      </div>
      <div>
        <p class="data-name">New Recovered</p>
        <p>{{ numberWithCommas(globalData.newRecovered) }}</p>
      </div>
      <div>
        <p class="data-name">Total Confirmed</p>
        <p>{{ numberWithCommas(globalData.totalConfirmed) }}</p>
      </div>
      <div>
        <p class="data-name">Total Deaths</p>
        <p>{{ numberWithCommas(globalData.totalDeaths) }}</p>
      </div>
      <div>
        <p class="data-name">Total Recovered</p>
        <p>{{ numberWithCommas(globalData.totalRecovered) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import numberWithCommas from "../helpers/numberFormat";

export default {
  props: ["today"],
  setup() {
    const store = useStore();

    const globalData = computed(() => {
      return store.getters.getGlobalData;
    });
    return {
      globalData,
      numberWithCommas,
    };
  },
};
</script>

<style lang="scss" scoped>
.global-data-container {
  background-color: #ccc;
  background-color: $f1_gray;
  padding: 1rem;

  @include lg {
    border-radius: 0.5rem;
  }

  .top-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .data-section {
    display: grid;
    grid-template-columns: 1fr;
    // justify-items: center;
    gap: 1rem;

    @include sm {
      grid-template-columns: 1fr 1fr;
    }
    @include md {
      grid-template-columns: 1fr 1fr 1fr;
    }

    div {
      width: 250px;
      margin: 0 auto;
    }

    div:nth-child(3),
    div:nth-child(6) {
      color: $green;
    }

    div:nth-child(2),
    div:nth-child(5) {
      color: $burgundy;
    }

    .data-name {
      font-weight: 600;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
