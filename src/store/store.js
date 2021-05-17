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
    summaryData: {}
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
    },
    getSummaryData(state) {
      return state.summaryData;
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
    },
    setSummaryData(state, payload) {
      state.summaryData = payload;
    }
  }
});
