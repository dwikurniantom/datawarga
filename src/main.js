import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/tailwind.css'
import Vuelidate from 'vuelidate'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Vuelidate);
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
