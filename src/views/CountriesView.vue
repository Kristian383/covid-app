<template>
  <div class="home-container">
    <the-loader v-if="!isLoaded"></the-loader>
    <template v-else>
      <GlobalData :today="getDate" />
      <CountriesList :today="getDate" />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import CountriesList from "@/components/CountriesList.vue";
import GlobalData from "@/components/GlobalData.vue";

import { useStore } from "vuex";
import { computed, inject } from "vue";

export default {
  name: "HomeView",
  components: {
    CountriesList,
    GlobalData,
  },
  setup() {
    const store = useStore();
    const isLoaded = inject("isLoaded");

    const getDate = computed(() => {
      return store.getters.getDateTime;
    });

    return {
      getDate,
      isLoaded,
    };
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
  padding-top: 2rem;
  // justify-content: center;
  // align-items: center;
  max-width: 980px;
  width: 100%;
}
</style>
