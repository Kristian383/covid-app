import { createRouter, createWebHistory } from "vue-router";
import CountriesView from "../views/CountriesView.vue";

const routes = [
  { path: "/", redirect: "/countries" },

  {
    path: "/countries",
    name: "Countries",
    component: CountriesView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/country/:name",
    name: "Country Covid information",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CountryView.vue"),
  },
  {
    path: "/:notFound(.*)*",
    name: "Not found",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
