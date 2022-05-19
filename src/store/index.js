import { createStore } from "vuex";

export default createStore({
  state: {
    countries: [],
    countryData: [],
    country: "",
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
    getCountryName(state) {
      return state.country;
    },
    getcountryData(state) {
      return state.countryData;
    },
    getTotalCountryData(state) {
      if (!state.countryData.length) return;
      const lastDay = state.countryData[0];
      const data = {
        totalCases: lastDay.confirmed,
        deaths: lastDay.deaths,
        recovered: lastDay.recovered,
        date: lastDay.date,
      };
      return data;
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
          slug: el.Slug,
        };
        state.countries.push(country);
      });
      state.todayDate = new Date(payload.Date).toDateString();
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
    loadCountryData(state, payload) {
      //this puts data from newest date to oldest
      for (let index = payload.length - 1; index >= 0; index--) {
        let dayData = payload[index];
        const data = {
          date: new Date(dayData.Date).toDateString(),
          confirmed: dayData.Confirmed,
          deaths: dayData.Deaths,
          recovered: dayData.Recovered,
          active: dayData.Active,
        };
        state.countryData.push(data);
      }
      // payload.forEach((dayData) => {
      // });
      if (payload.length) {
        state.country = payload[0].Country;
      }
    },
    emptyCountryData(state) {
      state.countryData = [];
      state.country = "";
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
      return true;
      // console.log(responseData.Countries);
    },
    async loadCountryData(context, payload) {
      let url = `https://api.covid19api.com/dayone/country/${payload}`;

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
        return response.status;
      }

      const responseData = await response.json();
      context.commit("loadCountryData", responseData);
      return true;
    },
  },
  modules: {},
});
