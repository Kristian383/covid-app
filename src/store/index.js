import { createStore } from "vuex";

export default createStore({
  state: {
    countries: [],
    countryData: [],
    globalData: [],
    todayDate: "",
  },
  getters: {
    getAllCountries(state) {
      return state.countries;
    },
    getDateTime(state) {
      return state.todayDate;
    },
    getGlobalData(state) {
      return state.globalData;
    },
  },
  mutations: {
    loadAllCountries(state, payload) {
      payload.Countries.forEach((el) => {
        let country = {
          country: el.Country,
          activeCases: el.NewConfirmed,
          totalConfirmed: el.TotalConfirmed,
          newDeaths: el.NewDeaths,
          totalDeaths: el.TotalDeaths,
          newRecovered: el.NewRecovered,
          totalRecovered: el.TotalRecovered,
        };
        state.countries.push(country);
      });
      state.todayDate = new Date(payload.Date).toDateString();
      // console.log(state.todayDate);
    },
    loadGlobalData(state, payload) {
      let data = {
        activeCases: payload.NewConfirmed,
        totalConfirmed: payload.TotalConfirmed,
        newDeaths: payload.NewDeaths,
        totalDeaths: payload.TotalDeaths,
        newRecovered: payload.NewRecovered,
        totalRecovered: payload.TotalRecovered,
      };
      state.globalData = data;
      // console.log(state.globalData);
    },
  },
  actions: {
    async loadAllCountries(context) {
      let url = `https://api.covid19api.com/summary`;

      let response;
      try {
        response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch {
        return "There was an error!";
      }

      if (!response.ok) {
        console.log(response.status);
        return false;
      }

      const responseData = await response.json();

      context.commit("loadAllCountries", {
        Countries: responseData.Countries,
        Date: responseData.Date,
      });

      context.commit("loadGlobalData", responseData.Global);
      // console.log(responseData.Countries);
    },
  },
  modules: {},
});
