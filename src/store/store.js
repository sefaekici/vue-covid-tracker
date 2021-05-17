import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    countries: {},
    selectedCountry: "Summary",
    statistics: {
      totalDeaths: "-",
      totalConfirmed: "-",
      totalRecovered: "-"
    },
    summary: {}
  },
  getters: {
    getCountries(state) {
      return state.countries;
    },
    getStatistics(state) {
      return state.statistics;
    },
    getSelectedCountry(state) {
      return state.selectedCountry;
    }
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
    setSelectedCountry(state, payload) {
      state.selectedCountry = payload;
    },
    setStatistics(state, paylaod) {
      state.statistics.totalConfirmed = paylaod.TotalConfirmed;
      state.statistics.totalDeaths = paylaod.TotalDeaths;
      state.statistics.totalRecovered = paylaod.TotalRecovered;
    }
  }
});
