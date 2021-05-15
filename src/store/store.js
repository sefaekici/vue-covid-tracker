import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    countries: {},
    selectedCountry: "total"
  },
  getters: {
    getCountries(state) {
      return state.countries;
    }
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
    setSelectedCountry(state, payload) {
      state.selectedCountry = payload;
    }
  }
});
