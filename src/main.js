import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Following these two tutorials:
// https://www.youtube.com/watch?v=xTiWDVKz8u4
// https://www.youtube.com/watch?v=cnfR4vYJGgY

// Installing electron in vue app _ terminal: vue add electron-builder
// Installing tailwind css (better follow the videos) _ npm install tailwindcss --s
// ./node_modules/.bin/tailwind init tailwind.js

new Vue({
  data: {
    darkMode : true
},

  router,
  store,
  render: h => h(App)
}).$mount('#app')
