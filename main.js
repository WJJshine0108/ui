import App from './App'
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia';

export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App)
  app.use(pinia)
  return { app, pinia }
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
const pinia = createPinia();
const app = new Vue(App)
app.use(pinia)
app.$mount()
// #endif