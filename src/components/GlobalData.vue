<template>
  <div class="global-data-container">
    <div class="top-section">
      <h2>Current global data</h2>
      <p>Up to and including <i>11 max 2022</i></p>
    </div>
    <div class="data-section">
      <div v-for="data in dataTypes" :key="data.name">
        <p class="data-name">{{ data.name }}</p>
        <p>{{ data.population }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const dataTypes = ref([
      {
        name: "Active cases",
        population: 0,
      },
      {
        name: "New deaths",
        population: 0,
      },
      {
        name: "New recovered",
        population: 0,
      },
      {
        name: "Total confirmed",
        population: 0,
      },
      {
        name: "Total deaths",
        population: 0,
      },
      {
        name: "Total recovered",
        population: 0,
      },
    ]);

    return {
      dataTypes,
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
