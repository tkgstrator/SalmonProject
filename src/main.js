import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import vuetify from "./plugins/vuetify";
import router from "./router"
import "./plugins/firebase"
import "./assets/sass/style.scss"

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    uid: null,
  },
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app")
