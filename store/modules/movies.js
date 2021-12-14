import axios from 'axios'
import { apiKey, baseUrl } from '@/api/keys'

const state = () => ({
  movies: [],
  pagination: {
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  searchedMovies: [],
  adult: false,
})

const getters = {
  getMovies: (state) => state.movies,
  getPagination: (state) => state.pagination,
  getAllSearchedMovies: (state) => state.searchedMovies,
  getAdult: (state) => state.adult,
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
  setSearchedMovies: (state, searchedMovies) => {
    state.searchedMovies = searchedMovies
  },
  resetSearchedMovies: (state) => {
    state.searchedMovies = []
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
  async getMoviesSearched({ state, commit }, query) {
    const { data } = await axios.get(
      `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${state.pagination.page}&include_adult=${state.adult}`
    )
    commit('setSearchedMovies', data)
    // eslint-disable-next-line no-console
    console.log(query)
    console.log(data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
