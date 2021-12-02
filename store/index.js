import movies from './modules/movies'

export default {
  state: () => ({
    snackbar: {
      show: false,
      text: '',
      color: '',
    },
  }),
  getters: {
    snackbar: (state) => state.snackbar,
  },
  mutations: {},
  modules: {
    movies,
  },
}
