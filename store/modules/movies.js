const state = () => ({
  movies: [],
})

const getters = {
  getMovies: (state) => state.movies,
}
const mutations = {
  setMovies: (state, movies) => {
    state.movies = movies
  },
}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
