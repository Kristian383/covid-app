<template>
  <TheHeader />
  <router-view />
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  scroll-behavior: smooth;
}

// nav {
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
