import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import "../node_modules/vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  router,
  vuetify: new Vuetify({
      icons: {
        iconfont: 'mdi',
      }
  }),
  render: h => h(App),
}).$mount('#app')
