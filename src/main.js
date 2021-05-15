import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);
new Vue({
  el: "#app",
  Vuetify,
  render: h => h(App)
});
