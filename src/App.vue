<template>
  <TheHeader />
  <router-view />
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";

import { useStore } from "vuex";
import { onMounted, provide, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    TheHeader,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isLoaded = ref(false);

    onMounted(() => {
      store.dispatch("loadAllCountries").then((res) => {
        if (res === true) {
          isLoaded.value = true;
        } else {
          window.alert("Something went wrong on the server side.");
          isLoaded.value = true;
          router.push("/notFound");
        }
      });
    });

    provide("isLoaded", isLoaded);

    return {};
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
