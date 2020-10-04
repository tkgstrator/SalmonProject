import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify";
import router from "./router"
import "./plugins/firebase"
import "./assets/sass/style.scss"
import VueHighlightJS from "vue-highlight.js"

Vue.config.productionTip = false

import 'vue-highlight.js/lib/allLanguages'

import "highlight.js/styles/vs2015.css"

Vue.use(VueHighlightJS)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app")
