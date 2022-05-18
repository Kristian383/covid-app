<template>
  <div class="home-container">
    <GlobalData />
    <CountriesList />
  </div>
</template>

<script>
// @ is an alias to /src
import CountriesList from "@/components/CountriesList.vue";
import GlobalData from "@/components/GlobalData.vue";

export default {
  name: "HomeView",
  components: {
    CountriesList,
    GlobalData,
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
