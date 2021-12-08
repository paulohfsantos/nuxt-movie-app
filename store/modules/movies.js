import axios from 'axios'
import { apiKey, baseUrl } from '@/api/keys'

const state = () => ({
  movies: [],
  pagination: {
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
})

const getters = {
  getMovies: (state) => state.movies,
  getPagination: (state) => state.pagination,
}
const mutations = {
  setMovies: (state, movies) => {
    state.movies = movies
  },
  resetMovies: (state) => {
    state.movies = []
  },
  setPagination: (state, pagination) => {
    state.pagination.page = pagination.page
    state.pagination.totalPages = pagination.totalPages
    state.pagination.totalResults = pagination.totalResults
  },
}
const actions = {
  async getMovies({ state, commit }) {
    const { data } = await axios.get(
      `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=${state.pagination.page}`
    )
    commit('setMovies', data)
    // eslint-disable-next-line no-console
    console.log(data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
