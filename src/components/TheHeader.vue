<template>
  <div class="header-wrapper">
    <nav class="navbar">
      <div class="brand-title"><b>Covid</b> tracker</div>
      <a href="#" class="toggle-button" @click="toggleNavbar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links" :class="{ active: isActive }">
        <ul>
          <li>
            <router-link active-class="active" to="/countries"
              >Countries</router-link
            >
          </li>
          <!-- <li><router-link active-class="active" to="/">About</router-link></li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isActive = ref(false);

    function toggleNavbar() {
      isActive.value = !isActive.value;
    }

    return {
      isActive,
      toggleNavbar,
    };
  },
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.navbar {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: $font_black;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
}

.brand-title {
  font-size: 1.5rem;
  margin: 0.5rem;
}

.navbar-links {
  height: 100%;
}

.navbar-links ul {
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  list-style: none;
}

.navbar-links li a {
  display: block;
  font-weight: 600;
  text-decoration: none;
  /* color: white; */
  color: #333;
  transition: 0.3s all ease-in;
  padding: 1rem;
  border-bottom: 4px solid transparent;
}

.navbar-links li:hover a,
.navbar-links .active {
  color: $light_blue_hover;
  //   background-color: $f1_gray;
  border-bottom: 4px solid $light_blue_hover;
}

.toggle-button {
  position: absolute;
  top: 1.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: rgb(83, 80, 80);
  border-radius: 10px;
}

@media (max-width: 800px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .toggle-button {
    display: flex;
  }

  .navbar-links {
    display: none;
    width: 100%;
  }

  .navbar-links ul {
    width: 100%;
    flex-direction: column;
  }

  .navbar-links ul li {
    text-align: center;
  }

  .navbar-links ul li a {
    padding: 0.5rem 1rem;
  }

  .navbar-links.active {
    display: flex;
  }
}
</style>
