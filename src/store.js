import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: "theme_dark",
    recent_stocks: {
      one: {
        id: 1,
        symbol: "F",
        name: "Ford",
        price: "10.43€"
      },
      two: {
        id: 2,
        symbol: "TSLA",
        name: "Tesla",
        price: "241.39€"
      },
      three: {
        id: 3,
        symbol: "FB",
        name: "Facebook",
        price: "154.05€"
      }
    }
  },
  mutations: {
    toggleTheme(state, payload) {
      state.theme = state.theme == "theme_light" ? "theme_dark" : "theme_light"
    },
    setTheme(state, theme) {
      state.theme = theme
    },
  },
  actions: {

  },
  getters: {
    // Use getters if you want to use a function on your state.
    // then in computed return Store.state.getters.yourDataHere
  }
})
