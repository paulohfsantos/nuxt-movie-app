import axios from 'axios'
import { apiKey, baseUrl } from '@/api/keys'

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
  resetMovies: (state) => {
    state.movies = []
  },
}
const actions = {
  async getMovies({ commit }) {
    const { data } = await axios.get(
      `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    )
    commit('setMovies', data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
