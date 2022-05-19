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
    getCountryData(state) {
      return state.countryData;
    },
    getTotalCountryData(state) {
      if (!state.countryData.length) return;
      const lastDay = state.countryData[0];
      // console.log(lastDay);
      // if (lastDay == undefined) return;
      // console.log(lastDay);

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
      //this puts data from newest to oldest
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
    },
    emptyCountryData(state) {
      state.countryData = [];
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
        return false;
      }

      const responseData = await response.json();

      context.commit("loadCountryData", responseData);
    },
  },
  modules: {},
});
